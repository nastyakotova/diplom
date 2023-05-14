import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const GridLayout = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  height: 100%;
  margin-left: 24px;
  padding: 24px;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 24px; /* ширина scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: none; /* цвет дорожки */
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(16, 16, 16, 0.1); /* цвет плашки */
    border-radius: 20px; /* закругления плашки */
    border: 10px solid #ffffff; /* padding вокруг плашки */
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 8fr 1fr 1fr 0.5fr;
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  height: 62px;
  white-space: pre-wrap;
`;

export const Grid = ({ currentItem }) => {
  const { disciplines } = useSelector((state) => state.data);

  return (
    <GridLayout>
      <GridContainer>
        <HeaderItem>ФИО студента</HeaderItem>
        <HeaderItem>Текущая успеваемость</HeaderItem>
        <HeaderItem>Прогноз</HeaderItem>
        <HeaderItem>Итог</HeaderItem>
        <HeaderItem />
        {disciplines[currentItem]?.Group.Users.map((user) => (
          <React.Fragment key={user.id}>
            <HeaderItem>
              {user.surname ? `${user.surname}\n` : ''}
              {user.name ? `${user.name} ` : ''}
              {user.patronymic ? user.patronymic : ''}
            </HeaderItem>
            <HeaderItem />
            <HeaderItem />
            <HeaderItem />
            <HeaderItem />
          </React.Fragment>
        ))}
      </GridContainer>
    </GridLayout>
  );
};
