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

moveBooks = (book, shelf) => {

	const filterBook = c => {
		console.log('c', c.id);
		console.log('BOOK ID', book.id);
		console.log('SHELF ID', c.shelf);
		console.log('SHELF', shelf);

		if (c.id === book.id && c.shelf !== shelf) {
			c.shelf = shelf;
		}
		
		return c;
	}

	this.setState(state => {
		// const hasBook = state.books.some(currentBook => currentBook.id === book.id);

		state.books.filter(filterBook);

		this.setState(state => ({ searchBook: state.searchBook.filter( filterBook ) }))

		BooksAPI.update(book, shelf);
	})
}

searchBook = q => {
	console.log('query', q);
	
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
					shelfSearchBook={this.searchBook}
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