import React from 'react';
import Book from './Book';

const SearchResults = props => {

    const { searchBooks, books, changeShelf } = props;

    const movedBooks = searchBooks.map(book => {
        books.map(b => {
          if (b.id === book.id) {
            book.shelf = b.shelf;
          }
          return b;
        });
        return book;
      });

    return (
        <div className="search-books-results">
                <ol className="books-grid">
                    {movedBooks.map(book => (
                    <Book
                        key={book.id}
                        book={book}
                        shelf={book.shelf ? book.shelf : 'none'}
                        changeShelf={changeShelf}
                    />
                    ))}
                </ol>
        </div>

    );

};
export default SearchResults;