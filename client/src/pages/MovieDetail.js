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
  UserForm,
  ReviewItem,
  CommentItemForm,
  ReviewButtonDelete,
  ReviewButtonEdit,
} from './elements/MovieDetailElements';
import { useSelector, useDispatch } from 'react-redux';
import { movieActions } from '../redux/actions';
import { reviewActions } from '../redux/actions';
import moment from 'moment';

export function MovieDetail() {
  const movies = useSelector((state) => state.movie.movies.data?.movies);
  const reviews = useSelector((state) => state.review.reviews);
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [review, setReview] = useState({
    body: '',
    movieId: id,
    userId: user.id,
  });
  const movieReview = reviews.filter((review) => review.movieId === id);
  const movie = movies?.find((m) => m._id === id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieActions.getAll());
  }, [dispatch]);

  useEffect(() => {
    dispatch(reviewActions.getAll());
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
          <ReviewsListForm>
            {movieReview?.map((m) => {
              return (
                <ReviewItem key={m._id}>
                  <UserForm>
                    <img
                      src={
                        m.userId === user.id
                          ? user.avatarUrl
                          : 'data:image/png;base64,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'
                      }
                      alt="avatar"
                      style={{ width: '45px', height: '45px' }}
                    />
                    <div>
                      <div>{m.userId === user.id ? user.name : 'guest'}</div>
                      <div>{moment(m.updatedAt).fromNow()}</div>
                    </div>
                  </UserForm>
                  <CommentItemForm>
                    <div>{m.body}</div>
                    {m.userId === user.id ? (
                      <ReviewButtonDelete
                        onClick={() =>
                          dispatch(reviewActions.deleteReview(m._id))
                        }
                      >
                        {' '}
                        <i className="fas fa-trash-alt"></i>
                      </ReviewButtonDelete>
                    ) : (
                      ''
                    )}

                    {m.userId === user.id ? (
                      <ReviewButtonEdit>
                        {' '}
                        <i className="far fa-edit"></i>
                      </ReviewButtonEdit>
                    ) : (
                      ''
                    )}
                  </CommentItemForm>
                </ReviewItem>
              );
            })}
          </ReviewsListForm>
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
