import React, { Component } from 'react'

class Book extends Component {

    
    render() {
        const { book, shelf } = this.props
        console.log('book', book);
        
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
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default Book;