import React from 'react';
import Rating from '@mui/material/Rating';

class Book extends React.Component {
    state = {
        value: this.props.shelf
      };

     
    moveBook = (event) => {
        const newShelf = event.target.value;
        this.setState({ newShelf });
        this.props.changeShelf(this.props.book, newShelf)

    }


    render() {

        const { book } = this.props;

        return(
            <li>
                <div className="book">
                <div className="book-top">
                    <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                        book.imageLinks
                            ? book.imageLinks.thumbnail
                            : 'icons/book-placeholder.svg'
                        })`
                    }}
                    />
                    
                    <div className="book-shelf-changer">
                        <select value={this.state.value} onChange={this.moveBook}>
                        <option value="move" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>

                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors ? book.authors.join(', ') : 'Unknown Author'}
                </div>
    
                <div className="book-authors">
                Rating: <Rating
                name="read-only"
                value={book.averageRating ? book.averageRating : 0} readOnly /></div>
                </div>
            </li>

        );}
}

export default Book;