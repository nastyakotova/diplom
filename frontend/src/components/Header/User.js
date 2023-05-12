import * as React from 'react';
import styled from 'styled-components';

import avatar from '../../assets/images/avatar.jpg';
import { useSelector } from 'react-redux';

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 24px;
  & img {
    margin-left: 24px;
  }
`;

const UserInfo = styled.div`
  & h2 {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 4px;
  }
  & p {
    font-size: 14px;
    line-height: 16px;
    color: rgba(16, 16, 16, 0.5);
  }
`;

export const User = () => {
  const { name, patronymic, surname } = useSelector((state) => state.user);

  return (
    <UserContainer>
        <UserInfo>
            <h2>{`${name} ${patronymic} ${surname}`}</h2>
            <p>Факультет математики</p>
        </UserInfo>
        <img src={avatar} alt='' />
    </UserContainer>
  );
};
