import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';

import { store } from './state/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TaskView from './routes/TaskView';
import CalendarView from './routes/CalendarView';
import Container from './routes/Container';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<TaskView />} />
            <Route path="calendar" element={<CalendarView />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
