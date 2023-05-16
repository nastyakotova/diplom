import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ModalWindow } from '../SimpleComponents/ModalWindow';
import { Button } from '../SimpleComponents/Button';

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
  border-bottom: 1px solid rgba(16, 16, 16, 0.1);
  & svg:hover {
    cursor: pointer;
  }
`;

const MoreButton = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0 0 0;
  & label {
    font-size: 14px;
    line-height: 16px;
    color: rgba(16, 16, 16, 0.5);
    margin-bottom: 6px;
  }
  & input {
    width: 264px;
    height: 49px;
    background: #ffffff;
    border: 1px solid rgba(16, 16, 16, 0.1);
    padding: 15px;
    gap: 10px;
    font-size: 16px;
    line-height: 19px;
    color: rgba(16, 16, 16, 0.5);
    margin-bottom: 20px;
  }
`;

export const Grid = ({ currentItem }) => {
  const { disciplines } = useSelector((state) => state.data);
  const [modalWindow, setModalWindow] = React.useState({ isActive: false, type: null });

  const closeModalWindow = () => setModalWindow({ isActive: false, type: null });

  return (
    <React.Fragment>
      <GridLayout>
        <GridContainer>
          <HeaderItem>ФИО студента</HeaderItem>
          <HeaderItem>
            {`Текущая успеваемость `}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              viewBox="0 96 960 960"
              width="14"
              fill="rgba(16, 16, 16, 0.5)"
              onClick={() => setModalWindow({ isActive: true, type: 'addColumn' })}
            >
              <path d="M427.667 875V628.333H181V523.667h246.667V277h104.666v246.667H779v104.666H532.333V875H427.667Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              viewBox="0 96 960 960"
              width="14"
              fill="rgba(16, 16, 16, 0.5)"
              onClick={() => setModalWindow({ isActive: true, type: 'deleteColumn' })}
            >
              <path d="M181 628.333V523.667h598v104.666H181Z" />
            </svg>
          </HeaderItem>
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
              <HeaderItem>
                <MoreButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 96 960 960"
                    width="24"
                    fill="rgba(16, 16, 16, 0.5)"
                  >
                    <path d="M480.571 934q-29.571 0-50.57-20.884-21-20.884-21-50.21 0-28.838 20.835-50.372 20.835-21.533 50.093-21.533 30.071 0 50.571 21.503 20.499 21.503 20.499 50.499 0 28.997-20.429 49.997t-49.999 21Zm0-287.001q-29.571 0-50.57-20.835-21-20.835-21-50.093 0-30.071 20.835-50.571 20.835-20.499 50.093-20.499 30.071 0 50.571 20.429 20.499 20.429 20.499 49.999 0 29.571-20.429 50.571-20.429 20.999-49.999 20.999Zm0-286q-29.571 0-50.57-21.212-21-21.213-21-51t20.835-50.62q20.835-20.833 50.093-20.833 30.071 0 50.571 20.927 20.499 20.928 20.499 50.715 0 29.787-20.429 50.905-20.429 21.118-49.999 21.118Z" />
                  </svg>
                </MoreButton>
              </HeaderItem>
            </React.Fragment>
          ))}
        </GridContainer>
      </GridLayout>
      <ModalWindow isActive={modalWindow.isActive} closeModalWindow={closeModalWindow}>
        {modalWindow.type === 'addColumn' ? (
          <React.Fragment>
            <p>Добавление колонки</p>
            <Form>
              <label>Название колонки</label>
              <input type="text" autoComplete="off" value="" />
              <label>Форма контроля</label>
              <input type="text" autoComplete="off" value="" />
            </Form>
            <Button>Добавить</Button>
          </React.Fragment>
        ) : null}
        {modalWindow.type === 'deleteColumn' ? (
          <React.Fragment>
            <p>Удаление колонки</p>
            <Form>
              <label>Выберите колонку для удаления</label>
              <input type="text" autoComplete="off" value="" />
            </Form>
            <Button>Удалить</Button>
          </React.Fragment>
        ) : null}
      </ModalWindow>
    </React.Fragment>
  );
};
