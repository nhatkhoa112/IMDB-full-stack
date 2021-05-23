import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  FormRegister,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  FormTextField,
  FormReviewGroup,
  FormVoteGroup,
} from './elements/UpdateMovieElements';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { movieActions } from '../redux/actions';
import { ToastContainer } from 'react-toastify';

export const UpdateMoviePage = () => {
  const [movie, setMovie] = useState({
    title: '',
    writer: '',
    director: '',
    actors: '',
    date_published: '',
    genre: '',
    description: '',
    budget: '',
    avg_vote: undefined,
    votes: undefined,
    reviews_from_users: undefined,
    reviews_from_critics: undefined,
  });

  //   const movieCreated = useSelector((state) => state.movie.movieCreated.movie);
  const movies = useSelector((state) => state.movie.movies);
  //   const loading = useSelector((state) => state.movie.loading);
  const { id } = useParams();
  const currentMovie = movies.movies?.find((m) => m._id === id);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(movieActions.update(movie));
  };

  useEffect(() => {
    dispatch(movieActions.getAll());
    if (currentMovie?._id) setMovie(currentMovie);
  }, [dispatch]);

  return (
    <>
      <h1>Update the Movie</h1>
      <ToastContainer />

      <Container>
        <Card>
          <FormRegister>
            <FormGroup controlId="formBasicTitle">
              <FormLabel>Title</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter movie Title"
                value={movie.title}
                onChange={(e) => setMovie({ ...movie, title: e.target.value })}
              />
            </FormGroup>
            <FormGroup controlId="formBasicActors">
              <FormLabel>Writer</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter writer"
                value={movie.writer}
                onChange={(e) => setMovie({ ...movie, writer: e.target.value })}
              />
            </FormGroup>
            <FormGroup controlId="formBasicActors">
              <FormLabel>Director</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter director"
                value={movie.director}
                onChange={(e) =>
                  setMovie({ ...movie, director: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup controlId="formBasicActors">
              <FormLabel>Actors</FormLabel>
              <FormControl
                type="text"
                placeholder=" Enter actors"
                value={movie.actors}
                onChange={(e) => setMovie({ ...movie, actors: e.target.value })}
              />
            </FormGroup>
            <FormGroup controlId="formBasicActors">
              <FormLabel>Date published</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter date published format YYYY-MM-DD"
                value={movie.date_published}
                onChange={(e) =>
                  setMovie({ ...movie, date_published: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup controlId="formBasicActors">
              <FormLabel>Genres</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter genres"
                value={movie.genre}
                onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
              />
            </FormGroup>
            <FormGroup controlId="formBasicActors">
              <FormLabel>Description</FormLabel>
              <FormTextField
                type="text"
                placeholder="Enter Description"
                value={movie.description}
                onChange={(e) =>
                  setMovie({ ...movie, description: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup controlId="formBasicActors">
              <FormLabel>Budget</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter count budget"
                value={movie.budger}
                onChange={(e) => setMovie({ ...movie, budger: e.target.value })}
              />
            </FormGroup>
            <FormVoteGroup>
              <FormReviewGroup>
                <FormLabel>Avage votes</FormLabel>
                <FormControl
                  type="number"
                  value={movie.avg_vote}
                  onChange={(e) =>
                    setMovie({ ...movie, avg_vote: e.target.value })
                  }
                />
              </FormReviewGroup>
              <FormReviewGroup>
                <FormLabel>Votes count</FormLabel>
                <FormControl
                  type="number"
                  value={movie.votes}
                  onChange={(e) =>
                    setMovie({ ...movie, votes: e.target.value })
                  }
                />
              </FormReviewGroup>
            </FormVoteGroup>
            <FormVoteGroup>
              <FormReviewGroup>
                <FormLabel>Reviews from users</FormLabel>
                <FormControl
                  type="number"
                  value={movie.reviews_from_users}
                  onChange={(e) =>
                    setMovie({ ...movie, reviews_from_users: e.target.value })
                  }
                />
              </FormReviewGroup>
              <FormReviewGroup>
                <FormLabel>Reviews from critics</FormLabel>
                <FormControl
                  type="number"
                  value={movie.reviews_from_critics}
                  onChange={(e) =>
                    setMovie({ ...movie, reviews_from_critics: e.target.value })
                  }
                />
              </FormReviewGroup>
            </FormVoteGroup>
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </FormRegister>
        </Card>
      </Container>
    </>
  );
};
