import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 350px;
  /* border-radius: 10px; */
  border: 1px #ccc solid;
  overflow: hidden;
  box-shadow: 0 5px 10px #ccc;
  display: flex;
  flex-direction: column;
  padding: 5px;
  &:hover {
    box-shadow: 0 10px 20px #ccc;
  }
`;

export const ImageLand = styled.div`
  width: 100%;
  height: 150px;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
`;

export const MovieInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: left;
`;

export const MovieTitle = styled.h5`
  height: 50px;
  overflow: hidden;
  overflow-y: auto;
`;

export const MovieDescription = styled.div`
  height: 75px;
  overflow: hidden;
  overflow-y: auto;
`;

export const LinkS = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
    color: black;
  }
`;

export const MovieButtonDelete = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  color: crimson;
  font-size: 15px;
  z-index: 20;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2);
    color: tomato;
  }
`;

export const MovieButtonEdit = styled.button`
  position: absolute;
  top: 10px;
  right: 40px;
  border: none;
  z-index: 20;
  background: transparent;
  color: skyblue;
  font-size: 15px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2);
    color: deepskyblue;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
`;
