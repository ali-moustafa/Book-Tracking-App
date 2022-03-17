import React from 'react';
import SearchResults from './SearchResults';


class SearchBooks extends React.Component {

    state = {
        value: '',
      };
    
    handleChange = event => {
        const search_query = event.target.value;
        this.setState({ value: search_query }, () => {
          this.props.queryBooks(search_query);
        });
      };

    render() {
        
        const { searchBooks, books, changeShelf } = this.props;

        return(
            <div className="search-books">
            <div className="search-books-bar">
                <div className="search-books-input-wrapper">
                    <input
                    type="text"
                    value={this.state.value}
                    placeholder="Search by title or author"
                    onChange={this.handleChange}
                    autoFocus
                    />
                </div>
            </div>
            <SearchResults
              searchBooks={searchBooks}
              books={books}
              changeShelf={changeShelf}
            />
          </div>
        )

}
}
export default SearchBooks