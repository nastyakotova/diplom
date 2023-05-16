import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router';

import { Header } from '../components/Header/Header';
import { professorNavigation, studentNavigation } from '../components/Header/assets/consts';

const OutletContainer = styled.div`
  max-width: 1720px;
  width: 90%;
  margin: 24px 0;
`;

export const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { role } = useSelector((state) => state.user);

  const [routes, setRoutes] = React.useState(
    role === 'student' ? studentNavigation : role === 'professor' ? professorNavigation : [],
  );

  React.useEffect(() => {
    setRoutes(role === 'student' ? studentNavigation : role === 'professor' ? professorNavigation : []);
  }, [role]);

  React.useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  React.useEffect(() => {
    document.title = `РГПУ им. А.И. Герцена ${routes.find((route) => route.path === location.pathname)?.title || ''}`;
  }, [location.pathname, routes]);

  return (
    <React.Fragment>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </React.Fragment>
  );
};
