import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { movieActions } from '../redux/actions';
import { Link } from 'react-router-dom';
function HomePage() {
  // const [movies, setMovies] = useState([]);
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(currentUser);
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
