import React, { Component } from 'react'
import Book from './Book';

class BookGrid extends Component {
    
    render() {

        const { book, shelf } = this.props

        return (
            <div className="list-books-content">
                <div>
                {shelf.map((boxShelf) => (
                    <div className="bookshelf" key={boxShelf.type}>
                    <h2 className="bookshelf-title">{boxShelf.title}</h2>
                        <ol className="books-grid">
                            { book.filter(books => boxShelf.type === books.shelf)
                            .map(newBooks => (
                                <li key={newBooks.id}>
                                        <div className="bookshelf-books">
                                            <Book
                                                book={newBooks}
                                                move={this.props.move}
                                                shelf={shelf}
                                                shelfValue={newBooks.shelf}
                                            />
                                        </div>
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                ))}
                </div>
            </div>
        )
    }

}

export default BookGrid;