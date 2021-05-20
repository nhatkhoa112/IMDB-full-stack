import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { movieActions } from "../redux/actions";

function HomePage() {
  // const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getAll);
  }, [dispatch]);

  return (
    <div>
      <h1>IMDB Home Page!</h1>
    </div>
  );
}

export { HomePage };
