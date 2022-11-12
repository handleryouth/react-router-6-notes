import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export default function Book() {
  // you can use this hooks below to get the context from the outlet component
  // const obj = useOutletContext();
  const { id } = useParams();
  return <div>Book {id}</div>;
}
