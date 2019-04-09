import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import { findKey as lodash}  from 'lodash'
import Book from './Book';

class SearchPage extends Component {

    state = {
        query: '',
        books: []
    }

    resultBooks = find => {
        console.log('find', find);  
        
        return find.map( rBook => {
            let rBookLodash = lodash(this.props.books, { id: rBook.id })

            if (rBookLodash) rBook.shelf = this.props.books[rBookLodash].shelf;

            return rBook;
        })
    }

    searchBook = q => {
        console.log('query', q);

        this.setState({ query: q })

        if (q.length > 2) {
            BooksAPI.search(this.state.query)
            .then(this.resultBooks)
            .then(data => {
                console.log('data', data);

                if (data !== undefined) {
                    this.setState({ books: data })
                }
            })
        }
    }

    render() {

        const { shelf, books, move } = this.props;

        return (
            <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"
                    onChange={e => this.searchBook(e.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        this.state.books.map( result => (
                            
                            <li key={result.id}>
                            <div className="bookshelf-books">
                                <Book
                                    book={result}
                                    shelfValue={result.shelf}
                                    move={move}
                                    shelf={shelf}
                                />
                            </div>
                            </li>
                        ))
                    }
                </ol>
            </div>
          </div>
        )
    }
}

export default SearchPage;