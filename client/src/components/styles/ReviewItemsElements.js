import styled from 'styled-components';

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

export const FormEdit = styled.form`
  width: 100%;
  height: 100%;
`;
export const ReviewEdit = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  border: none;
  outline: none;
  color: white;
  background: transparent;

  &::placeholder {
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

export const ReviewItem = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px blue solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
