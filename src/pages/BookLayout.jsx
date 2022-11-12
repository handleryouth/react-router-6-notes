import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function BookLayout() {
  // useSearchParams the same as getting query from the url, but acting like useState hooks from react
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");

  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to={`/books/${number}`}>Book {number}</Link>
      <br />
      <Link to="/books/new">New Book</Link>

      {/* Outlet is a component that renders the current route's child routes. */}
      {/* you can also pass context through the outlet component. just like react */}

      <Outlet context={{ hello: "word" }} />

      {/* <Outlet /> */}

      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
}
