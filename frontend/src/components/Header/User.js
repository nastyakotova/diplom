import * as React from 'react';
import styled from 'styled-components';

import avatar from '../../assets/images/avatar.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/user/actionsCreators';

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 24px;
  & img {
    cursor: pointer;
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

const UserMenu = styled.div`
  position: absolute;
  top: 100px;
  right: -24px;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 24px 0;
  width: 200px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.show ? '1' : '0')};
`;

const MenuItem = styled.div`
  padding: 16px 24px;
  color: #264796;
  border-bottom: 1px solid rgba(16, 16, 16, 0.1);
  &:hover {
    background: rgba(0, 55, 144, 0.03);
    cursor: pointer;
  }
`;

function useOutsideAlerter(ref, callback) {
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, ref]);
}

export const User = () => {
  const dispatch = useDispatch();
  const { name, patronymic, surname, role, Group, Department } = useSelector((state) => state.user);
  const [showMenu, setShowMenu] = React.useState(false);
  const menuRef = React.useRef(null);
  const handleMenuClose = () => setShowMenu(false);
  useOutsideAlerter(menuRef, handleMenuClose);

  return (
    <UserContainer>
      <UserInfo>
        <h2>
          {name ? `${name} ` : ''}
          {patronymic ? `${patronymic} ` : ''}
          {surname ? surname : ''}
        </h2>
        <p>{role === 'student' ? `Группа ${Group.groupName}` : role === 'professor' ? Department.title : ''}</p>
      </UserInfo>
      <div ref={menuRef}>
        <img src={avatar} alt="" onClick={() => setShowMenu((prev) => !prev)} />
        {showMenu ? (
          <UserMenu show={showMenu}>
            <MenuItem onClick={() => dispatch(logoutUser())}>Выйти</MenuItem>
          </UserMenu>
        ) : null}
      </div>
    </UserContainer>
  );
};
