import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/index.css';
import './styles/reset.css';

import store from './store';

import { Main } from './Layouts/Main';
import { AcademicPerformance } from './pages/AcademicPerformance';
import { Archive } from './pages/Archive';
import { Profile } from './pages/Profile';
import { Schedule } from './pages/Schedule';
import { Groups } from './pages/Groups';
import { Error } from './pages/Error';
import { Login } from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />}>
            {/* TODO: Нужно проверять авторизован ли пользователь и переводить на index если да и на страницу авторизаии если нет */}
            <Route index element={<AcademicPerformance />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
