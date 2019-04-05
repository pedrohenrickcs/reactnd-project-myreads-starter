import React, { Component } from 'react'

class Shelf extends Component {

    render() {
        
        const { book, shelf, move } = this.props;

        return (
            
            <div className="book-shelf-changer">
                <select onChange={e => move(book.id, e.target.value)} defaultValue="move">
                <option value="move" disabled>Move to...</option>
                {shelf.map((shelfOption) => ( 
                    <option key={shelfOption.type} value={shelfOption.type}>{shelfOption.title}</option>
                ))}
                <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default Shelf;