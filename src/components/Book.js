import React, { Component } from 'react'
import Shelf from './Shelf';

class Book extends Component {   

    render() {

        const {book, shelf, move, shelfValue} = this.props      

        const shelfTotal = shelfValue !== undefined ? shelfValue : 'none';
        
        const image = book.imageLinks === undefined ? '' : book.imageLinks.thumbnail; 
        
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ 
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${image})`
                    }} />
                    <Shelf shelf={shelf}
                            book={book}
                            move={move}
                            shelfTotal={shelfTotal}
                    />
                </div>
                <div className="book-title">{book.title ? book.title : 'No title'}</div>
                <div className="book-authors">{book.authors ? book.authors.join(', ') : 'No authors'}</div>
            </div>
        )
    }
}

export default Book;