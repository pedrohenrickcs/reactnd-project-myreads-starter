import React, { Component } from 'react'
import Shelf from './Shelf';

class Book extends Component {   

    render() {

        const {book, shelf, move} = this.props        
        
        return (
            <div className="book">
            <div className="book-top">
                    <div className="book-cover" style={{ 
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }} />
                    <Shelf shelf={shelf}
                            book={book}
                            move={move}
                    />
                </div>
            </div>
        )
    }
}

export default Book;