import React, { Component } from 'react'

class Book extends Component {

    
    render() {
        // const book = title;

        const { bookName } = this.props
        return (
            <ol>
                {bookName.map(bookName => (
                    <li>
                        <div className="book">
                            <div key={bookName.name}>{bookName.name}</div>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default Book;