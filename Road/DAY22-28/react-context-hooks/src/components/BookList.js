import React, { Component } from "react";

export default class BookList extends Component {
  render() {
    return (
      <div className='book-list'>
        <ul>
          <li>Empire of the Sun</li>
          <li>The Name of the Wind</li>
          <li>Lord of the Flies</li>
          <li>Harry Potter</li>
        </ul>
      </div>
    );
  }
}
