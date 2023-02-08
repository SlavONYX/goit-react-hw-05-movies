import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  // align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const FormButton = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 5px;
  background-color: #dbd9d0;
  &:hover,
  &:focus {
    background-color: #bfbebb;
  }
  &:hover,
  &:focus {
    opacity: 1;
  }
`;
export const FormInput = styled.input`
  width: 300px;
  height: 30px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 10px;
  border-radius: 5px;
`;