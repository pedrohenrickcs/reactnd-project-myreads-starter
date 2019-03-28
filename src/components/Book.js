import React, { Component } from 'react'
import Shelf from './Shelf';

class Book extends Component {   

    state = {
        shelf: []
    }

    render() {

        const {book, shelf} = this.props

        console.log('SHELF', shelf);
        
        return (
            <ol className="books-grid">
                {book.map((books) => (         
                    <li key={books.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ 
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url(${books.imageLinks.thumbnail})`
                                }} />
                                <Shelf shelf={shelf}
                                        book={book}
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default Book;