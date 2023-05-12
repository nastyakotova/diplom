import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';

import { Header } from '../components/Header/Header';

const OutletContainer = styled.div`
  max-width: 1720px;
  width: 90%;
  margin: 24px 0;
`;

export const Main = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  React.useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  return (
    <React.Fragment>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </React.Fragment>
  );
};
