import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom';
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

const allShelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];

class BooksApp extends React.Component {
  
  state = {
    allBooks: [],
    searchBooks: []
  };

  componentDidMount = () => {
    BooksAPI.getAll()
        .then(books => { console.log(books); this.setState({ allBooks: books});})
        .catch(e =>{ console.log(e);})
  };

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).catch(err => {
      console.log(err);
    });

    if (shelf === 'none'){
      this.setState( currState => ({allBooks: currState.allBooks.filter(b => b.id !== book.id)}));

    } else{
      book.shelf = shelf;
      this.setState( currState => ({allBooks: currState.allBooks.filter(b => b.id !== book.id).concat(book)}));
    }
  }

  queryBooks = (query) => {
    if (query) {
        BooksAPI.search(query).then(books => {
          if (books.error) {
            this.setState({ searchBooks: [] });
          } else {
            this.setState({ searchBooks: books });
          }
        });

    } else {
      this.setState({ searchBooks: this.state.allBooks });
    }


  }


  render(){

    const { allBooks, searchBooks } = this.state
    return (
      <div className="app">
        <BrowserRouter>

      <Route
        exact path="/" render= { () => (<ListBooks  books={allBooks} shelves={allShelves}
                                                    changeShelf={this.changeShelf} />)}
      />
     
      <Route
          path="/search"
          render={() => (
            <SearchBooks
              searchBooks={searchBooks}
              books={allBooks}
              queryBooks={this.queryBooks}
              changeShelf={this.changeShelf}
            />
          )}
        />
       </BrowserRouter>

    </div>
    )


  }
}

export default BooksApp
