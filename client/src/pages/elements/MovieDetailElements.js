import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`;

export const MovieCard = styled.div`
  width: 90%;
  height: 100vh;
  border: 2px solid #ccc;
  box-shadow: 0 5px 10px #ccc;
  display: flex;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 10px 20px #ccc;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 200vh;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 160vh;
  }
`;

export const MoviePoster = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  /* @media screen and (max-width: 768px) {
    height: 500%;
  } */
`;

export const MovieButtonDelete = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  border: none;
  background: transparent;
  color: crimson;
  font-size: 30px;
  z-index: 20;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2);
    color: tomato;
  }
`;

export const MovieButtonEdit = styled.button`
  position: absolute;
  top: 30px;
  right: 80px;
  border: none;
  z-index: 20;
  background: transparent;
  color: skyblue;
  font-size: 30px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2);
    color: deepskyblue;
  }
`;

export const MovieInfo = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: left;
  /* @media screen and (max-width: 768px) {
    height: 100vh;
  } */
`;

export const MovieTitle = styled.h4`
  text-align: center;
  margin-bottom: 15px;
`;

export const MovieActors = styled.div`
  display: flex;
  margin: 3px;
`;

export const MovieOverview = styled.div`
  height: 130px;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 3px;
`;

export const Button = styled.button`
  width: 30%;
  border: none;
  background: rgba(28, 128, 214, 0.7);
  margin: 2px;
  border-radius: 5px;
  color: white;

  &:hover {
    background: rgba(28, 128, 214, 0.3);
    color: black;
  }
`;

export const MovieWriter = styled.div`
  display: flex;
  margin: 3px;
`;

export const MovieDirector = styled.div`
  display: flex;
  margin: 3px;
`;

export const MovieGenres = styled.div`
  display: flex;
  margin: 3px;
`;

export const MovieVotes = styled.div`
  display: flex;
  margin: 3px;
`;

export const LinkS = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
    color: black;
  }
`;
