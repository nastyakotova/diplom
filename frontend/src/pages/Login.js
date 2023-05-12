import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loginUser } from '../store/user/actionsCreators';
import { useNavigate } from 'react-router';

const LoginContainer = styled.form`
  background-color: #ffffff;
  border-radius: 15px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  & h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 40px;
  }
  & input {
    width: 516px;
    height: 50px;
    background: #ffffff;
    border: 1px solid rgba(16, 16, 16, 0.1);
    padding: 15px;
    gap: 10px;
    font-size: 16px;
    line-height: 19px;
    color: rgba(16, 16, 16, 0.5);
    margin-bottom: 20px;
    border-radius: 10px;
  }
  & button {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 15px 35px;
    gap: 10px;
    background: #003790;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    cursor: pointer;
    border: none;
    margin: 10px 0 0 10px;
    border-radius: 10px;
    &:hover {
      background: #bababa;
    }
  }
`;

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { isAuthenticated } = useSelector((state) => state.user);

  React.useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ login, password }));
  };

  return (
    <LoginContainer autoComplete="off">
      <h2>Авторизация</h2>
      <input
        type="text"
        placeholder="Логин"
        autoComplete="off"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        autoComplete="off"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Войти</button>
    </LoginContainer>
  );
};
