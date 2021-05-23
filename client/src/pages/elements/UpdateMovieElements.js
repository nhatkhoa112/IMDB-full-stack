import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const Card = styled.div`
  width: 80%;
  height: 100%;
  border: 2px solid #ccc;
  box-shadow: 0 5px 10px #ccc;
  padding: 30px;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const FormRegister = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 5fr;
  margin-bottom: 10px;
`;

export const FormVoteGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 10px;
  grid-column-gap: 1em;
`;

export const FormReviewGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export const FormLabel = styled.h4`
  text-align: left;
  width: 100%;
`;

export const FormControl = styled.input`
  width: 100%;
  outline: none;
  background: transparent;
  padding: 0 10px;
`;

export const FormText = styled.p`
  width: 100%;
  text-align: left;
`;

export const Button = styled.button`
  border: none;
  background: blue;
  padding: 5px 10px;
  color: white;
  &:hover {
    background: #331cd6;
  }
`;

export const FormTextField = styled.textarea`
  width: 100%;
  outline: none;
  background: transparent;
  padding: 0 10px;
  border: 2px solid black;
`;
