import * as React from 'react';
import { Outlet } from 'react-router';
import { Header } from '../components/Header/Header';
import styled from 'styled-components';

const OutletContainer = styled.div`
  max-width: 1720px;
  width: 90%;
  margin: 24px 0;
`;

export const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </React.Fragment>
  );
};
