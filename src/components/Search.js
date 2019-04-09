import React, { Component } from 'react'
import SearchPage from './SearchPage';

class Search extends Component {
    render() {
		const { shelf, books, move } = this.props;

        return (
           <SearchPage
				shelf={shelf}
				books={books}
				move={move}
		   />
        )
    }
}

export default Search;