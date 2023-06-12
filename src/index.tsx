import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Portfolio } from './Portfolio';
import { Resume } from './Resume';
import { Welcome } from './Welcome';

import 'bootswatch/dist/flatly/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<App />}>
          <Route path='resume' element={<Resume />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='*' element={<Welcome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
