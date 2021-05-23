import React from 'react';
import { useDispatch } from 'react-redux';
import { movieActions } from '../redux/actions';
import {
  Container,
  ImageLand,
  MovieInfo,
  MovieTitle,
  MovieDescription,
  LinkS,
  MovieButtonDelete,
  MovieButtonEdit,
  Image,
  MovieVoteInfo,
} from './styles/MovieCardElements';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <ImageLand>
        <LinkS to={`/movie/${movie._id}/detail`}>
          <Image></Image>
        </LinkS>
        <MovieButtonDelete
          onClick={() => {
            let result = window.confirm('Are you sure?');
            if (result) dispatch(movieActions.deleteMovie(movie));
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </MovieButtonDelete>
        <LinkS to={`/movie/${movie._id}/edit`}>
          <MovieButtonEdit>
            <i className="far fa-edit"></i>
          </MovieButtonEdit>
        </LinkS>
      </ImageLand>
      <MovieInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDescription>{movie.description}</MovieDescription>
        <MovieVoteInfo>
          <div className="d-flex align-items-center">
            <strong>
              <u>Avg vote</u>
            </strong>
            <div style={{ marginLeft: '5px' }}>{movie.avg_vote}</div>
          </div>
          <div className="d-flex align-items-center">
            <strong>
              <u>Votes</u>
            </strong>
            <div style={{ marginLeft: '5px' }}>{movie.votes}</div>
          </div>
        </MovieVoteInfo>
      </MovieInfo>
    </Container>
  );
};

export default MovieCard;
