import React, { Component } from 'react'
import Book from './Book';

class BookGrid extends Component {
    
    render() {

        const { book, shelf } = this.props

        return (
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
                                                shelf={shelf}
                                                move={this.props.move}
                                            />
                                        </div>
                                    </li>
                                ))
                            }

                        </ol>
                    </div>
                ))}
            </div>
        )
    }

}

export default BookGrid;