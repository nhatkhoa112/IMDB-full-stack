import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { movieActions } from "../redux/actions";

function HomePage() {

  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getAll());
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export { HomePage };
