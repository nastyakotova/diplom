import styled from 'styled-components';
import avatar from '../assets/images/avatar.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../store/user/actionsCreators';

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 2fr;
  height: 920px;
  & * {
    box-sizing: border-box;
  }
`;

const MainContainer = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 0 0;
  text-align: center;
  & h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    margin-top: 60px;
    white-space: pre-wrap;
  }
  & p {
    font-size: 16px;
    line-height: 16px;
    color: rgba(16, 16, 16, 0.5);
    margin: 24px 0 60px 0;
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

const InfoContainer = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  height: 100%;
  margin-left: 24px;
  padding: 24px;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 24px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(16, 16, 16, 0.1);
    border-radius: 20px;
    border: 10px solid #ffffff;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  & h3 {
    margin: 0;
    padding: 0;
    height: 10px;
    font-size: 24px;
  }
  & h4 {
    height: 10px;
    margin: 0;
    padding: 0 0 0 24px;
  }
  & p {
    height: 10px;
    margin: 0;
    padding: 0;
  }
`;

const Avatar = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(16, 16, 16, 0.1);
  overflow: hidden;
`;

export const Profile = () => {
  const dispatch = useDispatch();
  const { name, patronymic, surname, role, Group, Department, isMale } = useSelector((state) => state.user);

  return (
    <ProfileContainer>
      <MainContainer>
        <Avatar>
          <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 96 960 960" width="100" fill="#ffffff">
            <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5T731 696q31 14 50 41t19 65v94H160Z" />
          </svg>
        </Avatar>
        <h2>
          {surname ? `${surname}\n` : ''}
          {name ? `${name} ` : ''}
          {patronymic ? patronymic : ''}
        </h2>
        <p>{role === 'student' ? `Группа ${Group.groupName}` : role === 'professor' ? Department.title : ''}</p>
        <button>Сменить пароль</button>
        <button>Сменить аватар</button>
        <button style={{ background: '#BA1600' }} onClick={() => dispatch(logoutUser())}>
          Выйти
        </button>
      </MainContainer>
      <InfoContainer>
        <h3>Анкетные данные</h3>
        <p></p>
        <h4>Дата рождения:</h4>
        <p>-</p>
        <h4>Пол:</h4>
        <p>{isMale ? 'мужской' : 'женский'}</p>
        <h4>Гражданство:</h4>
        <p>-</p>
        <h4>Адрес по прописке:</h4>
        <p>-</p>
        <h4>Место рождения:</h4>
        <p>-</p>
        <h4>Регион проживания:</h4>
        <p>-</p>
        <h4>Контактный телефон:</h4>
        <p>-</p>
        <h4>Электронная почта:</h4>
        <p>-</p>
        <h3>Учебные данные</h3>
        <p></p>
        <h4>Льготы:</h4>
        <p>-</p>
        <h4>Номер зачетной книжки:</h4>
        <p>-</p>
        <h3>Сведения о предыдущем образовании</h3>
        <p></p>
        <h4>Год окончания предыдущего образования:</h4>
        <p>-</p>
        <h4>Документ о предыдущем образовании:</h4>
        <p>-</p>
        <h4>Предыдущее образование</h4>
        <p>-</p>
        <h4>№ документа о предыдущем образовании:</h4>
        <p>-</p>
      </InfoContainer>
    </ProfileContainer>
  );
};
