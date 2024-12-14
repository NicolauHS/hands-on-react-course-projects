import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

const App = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <BookList />
    </>
  );
};

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} number={index + 1} key={book.id}></Book>;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
