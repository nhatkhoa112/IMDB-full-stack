import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  flex-direction: column;
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

export const ReviewForm = styled.div`
  width: 90%;
  height: 350px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background: rgba(0, 25, 125, 0.7);
`;

export const ReviewsList = styled.div`
  flex: 7;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ReviewInputForm = styled.form`
  width: 100%;
  background: white;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentInput = styled.input`
  flex: 8;
  height: 100%;
  outline: none;
  padding: 0 20px;
`;

export const CommentSubmit = styled.button`
  flex: 2;
  height: 100%;
  color: black;
  outline: none;
  border: none;
  transition: all 0.5s ease-in-out;
  background: rgba(24, 198, 23, 0.3);
  &:hover {
    background: rgba(24, 198, 23, 0.7);
    color: white;
  }
`;

export const ReviewsListForm = styled.div`
  width: 100%;
  height: 90%;
  border: 2px solid tomato;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
`;

export const ReviewItem = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px blue solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserForm = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 14px;
  border-right: 1px solid blue;
  overflow: hidden;
  overflow-y: auto;
  > div {
    width: 75%;
    overflow: hidden;
    overflow-y: auto;
  }
  > img {
    border-radius: 50%;
  }
`;

export const CommentItemForm = styled.div`
  position: relative;
  width: 85%;
  height: 100%;
  padding: 2px 20px;
  overflow: hidden;
  overflow-y: auto;
  text-align: left;
  > div {
    color: white;
  }
`;

export const ReviewButtonDelete = styled.button`
  font-size: 14px;
  border: none;
  background: transparent;
  color: crimson;
  z-index: 20;
  transition: all 0.5s ease-in-out;
  position: absolute;
  top: 10px;
  right: 20px;
  &:hover {
    transform: scale(1.2);
    color: tomato;
  }
`;

export const ReviewButtonEdit = styled.button`
  font-size: 14px;
  border: none;
  background: transparent;
  color: skyblue;
  z-index: 20;
  transition: all 0.5s ease-in-out;
  position: absolute;
  top: 10px;
  right: 40px;
  &:hover {
    transform: scale(1.2);
    color: deepskyblue;
  }
`;
