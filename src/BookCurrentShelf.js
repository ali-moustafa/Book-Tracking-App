import React from 'react';
import Book from './Book';


class BookCurrentShelf extends React.Component {
    render() {

        const { shelf, shelfBooks, changeShelf } = this.props;

        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{ shelf.name }</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                    {
                        shelfBooks.map(book => (
                            <Book key={book.id} book={book} shelf={shelf.key} changeShelf={changeShelf} />
                          ))

                    }
              </ol>
            </div>
          </div>





            );}
}

export default BookCurrentShelf;