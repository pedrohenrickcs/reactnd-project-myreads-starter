import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import { findKey as lodash}  from 'lodash'
import Book from './Book';
import { Link } from 'react-router-dom'

class SearchPage extends Component {

    state = {
        query: '',
        books: [],
        text: ''
    }

    resultBooks = find => {        
        return find.map(rBook => {
            
            let rBookLodash = lodash(this.props.books, { id: rBook.id })

            if (rBookLodash) rBook.shelf = this.props.books[rBookLodash].shelf;

            return rBook;
        })
    }

    searchBook = q => {

        this.setState({ query: q })

        if (q === '') this.setState({ books:[], text: '' })

        if (q.length > 2) {
            BooksAPI.search(this.state.query)
            .then(this.resultBooks)
            .then(data => {
                if (data !== undefined) {
                    this.setState({ books: data })
                }
            }).catch(e => {
                this.setState({ books: [] })

                this.setState({ text: 'No Results' })
            })
        }
    }

    render() {

        const { shelf, move } = this.props;

        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author"
                        onChange={e => this.searchBook(e.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {(this.state.books.length === 0 ) ? (
                        <p>{this.state.text}</p>
                    ) : ( 
                        this.state.books.map( result => (
                            
                            <li key={result.id}>
                            <div className="bookshelf-books">
                                <Book
                                    book={result}
                                    move={move}
                                    shelf={shelf}
                                    shelfValue={result.shelf}
                                />
                            </div>
                            </li>
                        ))
                    )}
                </ol>
            </div>
          </div>
        )
    }
}

export default SearchPage;