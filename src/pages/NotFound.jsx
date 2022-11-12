import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate("/");
    }, 1000);

    return timeOut;
  }, [navigate]);
  return <h1>NotFound</h1>;
}
