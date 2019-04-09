import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookGrid from './components/BookGrid';
import Search from './components/Search';
import Header from './components/Header';
import { BrowserRouter  as Router, Route, Link } from 'react-router-dom'

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

moveBooks = (book, shelf) => {	

	const filterBook = c => {

		if (c.id === book.id && c.shelf !== shelf) c.shelf = shelf;		
		
		return c;
	}

	this.setState(state => { state.books.filter(filterBook); })
	
	this.setState(state => ({ searchBook: state.searchBook.filter( filterBook ) }))

	BooksAPI.update(book, shelf);
}

componentDidMount() {
	BooksAPI.getAll().then((books) => {
		this.setState({ books });
	})
}

render() {

    return (
      	<div className="app">
		  <Router>
				<Route path="/search" render={() => (
					<Search shelf={this.state.shelf}
							books={this.state.books}
							move={this.moveBooks}
					/>
				)}/>

				<Route exact path="/" render={() => (
					<div className="list-books">
						<Header title="MyReads" />
							<BookGrid 
								shelf={this.state.shelf}
								book={this.state.books}
								move={this.moveBooks}
								/>
						<Link className="open-search" to="/search">
							<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
						</Link>
					</div>
				)}/>
			</Router>
      </div>
    )
  }
}

export default BooksApp