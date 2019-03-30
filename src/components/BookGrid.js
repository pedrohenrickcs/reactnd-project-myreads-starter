import React, { Component } from 'react'
import Book from './Book';

class BookGrid extends Component {
    
    render() {

        const { book, shelf } = this.props

        console.log('BOOK', book);      
        console.log('SHELF', shelf);

        return (
            <div>
                {shelf.map((boxShelf) => (
                    <div className="bookshelf" key={boxShelf.type}>
                        <h2 className="bookshelf-title">{boxShelf.title}</h2>
                        <div className="bookshelf-books">
                            <Book
                                book={book}
                                shelf={shelf}
                                move={this.props.move}
                            />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

}

export default BookGrid;