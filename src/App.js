import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookGrid from './components/BookGrid';
import Search from './components/Search';
import Header from './components/Header';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
	showSearchPage: false,
	books: [],
	searchBook: [],
	shelf: [{
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

}  

moveBooks = () => {
	const newState = this.state
	console.log('book 🤑', newState.book);
	console.log('shelf ⚡', newState.shelf.title);

	if (newState.shelf === newState.book) {
		console.log('é igual');		
	}	

	this.setState(state => ({

		searchBook: state.searchBook.map(book => {
			const chosen = state.books.find(cBook => cBook.id === book.id);
				console.log('STATE 1', chosen);
				console.log('STATE 2', book);

				return book
		})
	}))
}


componentDidMount() {
	BooksAPI.getAll().then((books) => {
		this.setState({ books });
	})
}

render() {

	const { shelfs } = this.state

    return (
      <div className="app">
        {this.state.showSearchPage ? (
			<Search shelf={shelfs}
			/>
        ) : (
          <div className="list-books">
			<Header title="MyReads" />
            <div className="list-books-content">
				<BookGrid 
					shelf={this.state.shelf}
					book={this.state.books}
					move={this.moveBooks}
				/>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp