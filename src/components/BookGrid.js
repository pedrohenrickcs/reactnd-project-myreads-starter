import React, { Component } from 'react'
import Book from './Book';

class BookGrid extends Component {

    state = {
        books: []
    }
    
    render() {
        const shelf = [
            {
                type: 'currentlyReading',
                title: 'Currently Reading'
            },
            {
                type: 'wantToRead',
                title: 'Want to Read'
            },
            {
                type: 'read',
                title: 'Read'
            }
        ]

        const { book } = this.props

        console.log('BOOK', book);        

        return (
            <div>
                {shelf.map((boxShelf) => (
                    <div className="bookshelf" key={boxShelf.type}>
                        <h2 className="bookshelf-title">{boxShelf.title}</h2>
                        <div className="bookshelf-books">
                            <Book
                                book={book}
                                shelf={shelf}
                            />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

}

export default BookGrid;