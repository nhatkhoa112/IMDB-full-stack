import styled from 'styled-components';

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const Card = styled.div`
  width: 70%;
  height: 60vh;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 10px #ccc;
  padding: 100px 30px;
`;

export const FormRegister = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const FormGroup = styled.div`
  width: 100%;
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
