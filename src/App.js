import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookGrid from './components/BookGrid';
import SearchPage from './components/SearchPage';
import noMatch from './components/noMatch'
import { BrowserRouter  as Router, Switch, Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
	showSearchPage: false,
	books: [],
	searchBook: [],
	title: '',
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

	this.setState(state => { 

		const hasBook = state.books.some(currentBook => currentBook.id === book.id);		

		if (!hasBook) {
			book.shelf = shelf;
			return state.books.concat(book)
		} else {
			return state.books.filter(filterBook); 
		}
		
		
	})
	
	this.setState(state => ({ searchBook: state.searchBook.filter( filterBook ) }))

	
	BooksAPI.update(book, shelf)
		.then(() => {
			this.getAllBooks();
		});
	
}

getAllBooks() {
	BooksAPI.getAll().then((books) => {
		this.setState({ books })
	})
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
				<Switch>
					<Route path="/search" render={() => (
						<SearchPage 
								shelf={this.state.shelf}
								books={this.state.books}
								move={this.moveBooks}
						/>
					)}/>

					<Route exact path="/" render={() => (
						<div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
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

					<Route component={ noMatch } />
				</Switch>
			</Router>
      </div>
    )
  }
}

export default BooksApp