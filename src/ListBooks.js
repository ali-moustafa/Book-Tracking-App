import React from 'react';
import { Link } from 'react-router-dom';
import BookCurrentShelf from './BookCurrentShelf';
import PropTypes from 'prop-types';

class ListBooks extends React.Component {
    render() {
        
        const { books, shelves, changeShelf } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                {shelves.map(shelf => (
                <BookCurrentShelf
                    key={shelf.key}
                    shelf={shelf}
                    shelfBooks={books.filter(book => book.shelf === shelf.key)}
                    changeShelf={changeShelf}
                />
                ))}
                </div>
                </div>

                <div className="open-search">
                <Link to="search">
                <button>Add a Book</button>
                </Link>
                </div>
            </div>




    );}
}

ListBooks.propTypes = {
	books : PropTypes.array.isRequired,
    shelves : PropTypes.array.isRequired,
    changeShelf : PropTypes.func.isRequired
}


export default ListBooks;