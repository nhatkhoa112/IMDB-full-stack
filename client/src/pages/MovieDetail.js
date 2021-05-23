import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import {
  Container,
  MovieButtonDelete,
  MovieButtonEdit,
  MovieCard,
  MoviePoster,
  MovieInfo,
  MovieTitle,
  MovieOverview,
  MovieActors,
  MovieWriter,
  MovieDirector,
  MovieGenres,
  Button,
  ReviewForm,
  LinkS,
  ReviewInputForm,
  ReviewsList,
  CommentInput,
  CommentSubmit,
  ReviewsListForm,
} from './elements/MovieDetailElements';
import { useSelector, useDispatch } from 'react-redux';
import { movieActions } from '../redux/actions';
import { reviewActions } from '../redux/actions';
import moment from 'moment';

export function MovieDetail() {
  const movies = useSelector((state) => state.movie.movies.data?.movies);
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [review, setReview] = useState({
    body: '',
    movieId: id,
    userId: user.id,
  });
  //   const loading = useSelector((state) => state.movie.loading);
  const movie = movies?.find((m) => m._id === id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieActions.getAll());
  }, [dispatch]);

  if (!movie) {
    return <Redirect to="/" />;
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (review.body) {
      dispatch(reviewActions.create(review));
    }
  };

  return (
    <Container>
      <MovieCard>
        <MoviePoster>
          <MovieButtonDelete
            onClick={() => {
              let result = window.confirm('Are you sure?');
              if (result) {
                dispatch(movieActions.deleteMovie(movie));
              }
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </MovieButtonDelete>
          <LinkS to={`/movie/${id}/edit`}>
            <MovieButtonEdit>
              <i className="far fa-edit"></i>
            </MovieButtonEdit>
          </LinkS>
        </MoviePoster>
        <MovieInfo>
          <MovieTitle>{movie && movie.title}</MovieTitle>
          <MovieActors>
            <strong style={{ flex: '1' }}>
              <u>Actors: </u>
            </strong>
            <div
              style={{
                flex: '9',
                height: '65px',
                overflow: 'hidden',
                overflowY: 'auto',
              }}
            >
              {' '}
              {movie &&
                movie.actors.split(',').map((a) => <Button>{a}</Button>)}
            </div>
          </MovieActors>
          <MovieWriter>
            <strong style={{ flex: '2' }}>
              <u>Writer: </u>
            </strong>
            <div
              style={{
                flex: '9',
                height: '35px',
                overflow: 'hidden',
                overflowY: 'auto',
              }}
            >
              {' '}
              {movie &&
                movie.writer
                  .split(',')
                  .map((a) => <Button style={{ width: '40%' }}>{a}</Button>)}
            </div>
          </MovieWriter>
          <MovieDirector>
            <strong style={{ flex: '2' }}>
              <u>Director: </u>
            </strong>
            <div
              style={{
                flex: '9',
                height: '35px',
                overflow: 'hidden',
                overflowY: 'auto',
              }}
            >
              {' '}
              {movie &&
                movie.director
                  .split(',')
                  .map((a) => <Button style={{ width: '40%' }}>{a}</Button>)}
            </div>
          </MovieDirector>
          <MovieOverview>
            <strong style={{ flex: '1' }}>
              <u>Overview: </u>
            </strong>
            <div style={{ flex: '9' }}>{movie && movie.description}</div>
          </MovieOverview>
          <MovieGenres>
            <strong style={{ flex: '1' }}>
              <u>Genres: </u>
            </strong>
            <div
              style={{
                flex: '9',
                height: '35px',
                overflow: 'hidden',
                overflowY: 'auto',
                padding: '0 5px',
              }}
            >
              {' '}
              {movie &&
                movie.genre
                  .split(',')
                  .map((a) => <Button style={{ width: '20%' }}>{a}</Button>)}
            </div>
          </MovieGenres>
          <MovieGenres>
            <div style={{ flex: '1', display: 'flex' }}>
              <strong>
                <u>Date published: </u>
              </strong>
              <div style={{ padding: '0 5px' }}>
                {movie && moment(movie.date_published).format('Do MMM  YYYY')}
              </div>
            </div>
            <div style={{ flex: '1', display: 'flex' }}>
              <strong>
                <u>Avg votes:</u>
              </strong>
              <div style={{ padding: '0 5px' }}>
                {movie && movie.avg_vote} of {movie && movie.votes} votes
              </div>
            </div>
          </MovieGenres>
          <MovieGenres>
            <div style={{ flex: '1', display: 'flex' }}>
              <strong>
                <u>Reviews from users: </u>
              </strong>
              <div style={{ padding: '0 5px' }}>
                {movie && movie.reviews_from_users}
              </div>
            </div>
            <div style={{ flex: '1', display: 'flex' }}>
              <strong>
                <u>reviews from critics:</u>
              </strong>
              <div style={{ padding: '0 5px' }}>
                {movie && movie.reviews_from_critics}
              </div>
            </div>
          </MovieGenres>
          <MovieGenres>
            <strong style={{ flex: '3' }}>
              <u>Production company: </u>
            </strong>
            <div
              style={{
                flex: '5',
                height: '35px',
                overflow: 'hidden',
                overflowY: 'auto',
                padding: '0 5px',
              }}
            >
              {' '}
              {movie && movie.production_company}
            </div>
          </MovieGenres>
        </MovieInfo>
      </MovieCard>
      <ReviewForm>
        <ReviewsList>
          <h4 style={{ textAlign: 'center', color: 'white', height: '10%' }}>
            Reviews
          </h4>
          <ReviewsListForm>{}</ReviewsListForm>
        </ReviewsList>
        <ReviewInputForm>
          <CommentInput
            value={review.body}
            onChange={(e) => setReview({ ...review, body: e.target.value })}
            type="text"
            placeholder="Enter your review"
          />
          <CommentSubmit onClick={handleOnSubmit}>Enter</CommentSubmit>
        </ReviewInputForm>
      </ReviewForm>
    </Container>
  );
}
