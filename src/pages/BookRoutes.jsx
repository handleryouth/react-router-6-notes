import React from "react";
import { Route, Routes } from "react-router-dom";
import Book from "./Book";
import BookLayout from "./BookLayout";
import BookList from "./BookList";
import NewBook from "./NewBook";

export default function BookRoutes() {
  return (
    <>
      <BookLayout />
      <Routes>
        {/* you can event nested routes like this.
        it will the same as the routes has /books in it int the first place */}
        {/* the code below equal to "/books/:id" or "/books/:id" */}
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />

        {/* you can use index to tell react router dom to render the component in
          the index page or base page */}
        <Route index element={<BookList />} />
      </Routes>
    </>
  );
}
