import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonForm = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  > button {
    border: none;
    background: rgba(32, 112, 0, 0.4);
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0 20px;
    color: white;
    box-shadow: 0 5px 10px #ccc;
    transition: all 0.5s ease-in-out;
    &:hover {
      background: rgba(32, 112, 0, 0.8);
      color: white;
      box-shadow: 0 10px 20px #ccc;
      transform: scale(0.9);
    }
  }
`;

export const MoviesForm = styled.div`
  width: 100%;
  height: 82%;
  overflow: hidden;
  overflow-y: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1em;
  grid-row-gap: 1em;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 978px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Pagination = styled.div`
  width: 100%;
  height: 10%;
`;
