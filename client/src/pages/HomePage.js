import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { movieActions } from '../redux/actions';
// import { imageExists } from '../utils/index';
import {
  HomeContainer,
  MoviesForm,
  Pagination,
  ButtonForm,
} from './elements/HomeElements';
import MovieCard from '../components/MovieCard';
import PaginationBar from '../components/PaginationBar';
import { ToastContainer } from 'react-toastify';
function HomePage() {
  // const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const moviesState = useSelector((state) => state.movie);
  const movies = moviesState.movies.data?.movies;
  const moviesTotal = moviesState.movies.data?.moviesTotal;
  const [pageNum, setPageNum] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [sort, setSort] = useState('');
  const totalPage = Math.ceil(moviesTotal / perPage);

  useEffect(() => {
    dispatch(movieActions.getAll(pageNum, perPage, '', sort));
  }, [dispatch, pageNum, perPage, sort]);

  return (
    <>
      <ToastContainer />
      <HomeContainer>
        <ButtonForm>
          <button
            onClick={() => {
              setSort('avg_vote');
              let newSort = 'avg-vote';
              dispatch(movieActions.getAll(pageNum, perPage, '', newSort));
            }}
          >
            Top movie of avg vote
          </button>
          <button
            onClick={() => {
              setSort('votes');
              let newSort = 'avg-votes';
              dispatch(movieActions.getAll(pageNum, perPage, '', newSort));
            }}
          >
            Top movie of votes
          </button>
          <button
            onClick={() => {
              setSort('');
              setSort('');
              let newSort = '';
              dispatch(movieActions.getAll(pageNum, perPage, '', newSort));
            }}
          >
            Clear
          </button>
        </ButtonForm>
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
            sort={sort}
          />
        </Pagination>
      </HomeContainer>
    </>
  );
}

export { HomePage };
