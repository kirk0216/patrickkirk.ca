import React from 'react';
import './App.css';

import { Navigation } from './Navigation';
import { Outlet } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='container bg-white min-vh-100'>
        <div className='d-flex flex-column h-100'>
          <Navigation app={this} />

          <main className='flex-fill align-self-stretch border rounded my-2'>
            <Outlet />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
