import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormBox = styled(Form)`
  display: flex;
  justify-content: space-around;
  width: 350px;
  padding: 40px;
  margin-bottom: 15px;
  border-radius: 10px;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  font-size: 20px;
  background: #cfd9df;
  box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);
`;

export const Input = styled(Field)`
  width: 250px;
  height: 30px;
  color: #000;
  background: #cfd9df;
  border-color: #c9ccd3;
  font-size: 16px;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;

  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ErrorMess = styled(ErrorMessage)`
  display: flex;
  justify-content: center;
  color: red;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const BtnForm = styled.button`
  // height: 50px;
  width: 150px;
  align-self: center;
  color: #fff;
  text-transform: capitalize;
  border: none;
  border-radius: 10px;
  background-color: #0072ff;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);

  &:hover {
    background-image: linear-gradient(to right, #00d2ff 0%, #3a7bd5 51%, #00d2ff 100%);
  }
`;
