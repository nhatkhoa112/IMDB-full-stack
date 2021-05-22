import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 200px;
  /* border-radius: 10px; */
  border: 1px #ccc solid;
  overflow: hidden;
  box-shadow: 0 5px 10px #ccc;

  &:hover {
    box-shadow: 0 10px 20px #ccc;
  }
`;
