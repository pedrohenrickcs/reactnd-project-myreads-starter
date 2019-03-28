import React, { Component } from 'react'

class Shelf extends Component {
    
    state = {
        shelf: []
    }

    render() {
        
        const { shelf } = this.props;

        return (
            
            <div className="book-shelf-changer">
                <select>
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