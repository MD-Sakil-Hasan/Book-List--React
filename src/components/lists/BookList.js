import React, { Component } from "react";
import Book from "../represantational/Book.js";
import { Link } from "react-router-dom";

class BookList extends Component {

  render() {
    // console.log("BookList render");
    return this.props.books.map((book, index) => {
      return (
        <Link to={"/" + book.id} key={book.id} style={{ textDecoration: "none", color: "black" }}>
          <Book 
            bookName={book.bookName}
            writer={book.writer}
            selectedBookHandler={() => this.props.selectedBookHandler(book.id)}
          />
        </Link>
        
      );
    });
  }
}

export default BookList;
