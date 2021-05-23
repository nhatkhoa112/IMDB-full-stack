import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MoviesForm = styled.div`
  width: 100%;
  height: 90%;
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
