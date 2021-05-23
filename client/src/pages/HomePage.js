import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { movieActions } from '../redux/actions';
// import { imageExists } from '../utils/index';
import { HomeContainer, MoviesForm, Pagination } from './elements/HomeElements';
import MovieCard from '../components/MovieCard';
import PaginationBar from '../components/PaginationBar';
import { ToastContainer } from 'react-toastify';
function HomePage() {
  // const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const moviesState = useSelector((state) => state.movie);
  const { movies, moviesTotal } = moviesState.movies;
  const [pageNum, setPageNum] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const totalPage = Math.ceil(moviesTotal / perPage);
  useEffect(() => {
    dispatch(movieActions.getAll(pageNum, perPage));
  }, [dispatch, pageNum, perPage]);

  return (
    <>
      <ToastContainer />
      <HomeContainer>
        <MoviesForm>
          {movies?.map((movie) => {
            return <MovieCard key={movie._id} movie={movie} />;
          })}
        </MoviesForm>
        <Pagination>
          <PaginationBar
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalPage={totalPage}
            perPage={perPage}
          />
        </Pagination>
      </HomeContainer>
    </>
  );
}

export { HomePage };
