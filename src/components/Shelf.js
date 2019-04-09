import React, { Component } from 'react'

class Shelf extends Component {

    render() {
        
        const { book, shelf, move, shelfTotal } = this.props;

        return (
            
            <div className="book-shelf-changer">
                <select value={shelfTotal} onChange={e => move(book, e.target.value)}>
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