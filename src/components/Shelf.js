import React, { Component } from 'react'

class Shelf extends Component {

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

        console.log('shelf', shelf);        

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            {shelf.map((shelfOption) => ( 
                                <option key={shelfOption.type} value={shelfOption.type}>{shelfOption.title}</option>
                            ))}
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shelf;