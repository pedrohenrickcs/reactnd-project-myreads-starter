import React, { Component } from 'react'

class Shelf extends Component {
    

    state = {
        shelf: []
    }

    render() {
        
        console.log('shelf', this.setState.shelf);        

        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="move" disabled>Move to...</option>
                    {this.setState.shelf.map((shelfOption) => ( 
                        <option key={shelfOption.type} value={shelfOption.type}>{shelfOption.title}</option>
                    ))}
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default Shelf;