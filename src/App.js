import "./App.css";
import { Link, NavLink, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import BookRoutes from "./pages/BookRoutes";

function App() {
  // you can use hooks called "useRoutes" to do the same thing as "Routes" component
  // const element = useRoutes([
  //   { path: "/", element: <Home /> },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  // ]);
  return (
    <>
      {/* you can also add new routes if you want to add a content based on specific
      routes */}

      {/* if you add location props to it, it will always be shown to that location, regarding the params */}
      <Routes location="/books">
        <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            {/* you can pass reloadDocument to reload entire document */}
            <Link to="/" reloadDocument>
              Home
            </Link>
          </li>
          <li>
            {/* if you want to custom link, you can use NavLink */}
            <NavLink
              // end means that it will be active only if the path is exactly the same
              end
              // you can styling like this, or you can specify active class name in the css file
              // style={({ isActive }) =>
              //   isActive
              //     ? {
              //         color: "red",
              //       }
              //     : {
              //         color: "blue",
              //       }
              // }
              to="/books"
            >
              Books
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* still the same as react router dom v5 */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* in the nested routes below, element is component that will always be
        rendered in the component children just dont forget to make the outlet
        component */}
        {/* the are 2 ways to render nested routes  */}
        {/* this is the first way */}
        {/* <Route path="/books" element={<BookLayout />}> */}
        {/* comment 1 you can event nested routes like this.
        it will the same as the routes has /books in it int the first place */}
        {/* the code below equal to "/books/:id" or "/books/:id" */}
        {/* <Route path=":id" element={<Book />} /> */}
        {/* <Route path="new" element={<NewBook />} /> */}
        {/* comment 2 you can use index to tell react router dom to render the component in
          the index page or base page */}
        {/* <Route index element={<BookList />} /> */}
        {/* </Route> */}

        {/* ================================ */}

        {/* this is the second way */}
        {/* dont forget to add "*" in the end of the path to tell that we want to
        accept any other params after that */}
        <Route path="/books/*" element={<BookRoutes />} />
        {/* <Route path="/books/:id" element={<Book />} /> -> can be nested inside */}
        {/* the code below can be considered as :id too. 
        but react-router-dom is smart enough to know that it's a new route */}
        {/* =============================== */}
        {/* <Route path="/books/new" element={<NewBook />} /> -> can be nested inside */}
        {/* for any other route, it will render the NotFound component */}
        {/* <Route path="*" element={<NotFound />} /> */}

        {/* =============================== */}
        {/* this one is for the useRoutes Hooks */}

        {/* {element} */}
      </Routes>
    </>
  );
}

export default App;
