import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
class BookList extends Component {

    render() {
        // console.log(this.props);
        const booklist = this.props.books.map(
            book =>
                <li className='list-group-item' key={book.id} onClick={() =>this.props.selectBook(book)}>
                    {book.title}
                </li>

        );
        return (
            <div>
                Book List
            <ul className='list-group'>
                    {booklist}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({ books: state.bookList });

export default connect(mapStateToProps,{ selectBook })(BookList);