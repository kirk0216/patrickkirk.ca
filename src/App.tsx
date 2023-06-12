import React from 'react';
import './App.css';

import { Contact } from './Contact';
import { Navigation } from './Navigation';
import { Outlet } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='d-flex flex-column flex-fill h-100 bg-white min-vh-100 w-50 mx-auto'>
        <Contact />

        <Navigation app={this} />

        <main className='align-self-stretch my-2 flex-grow-1'>
          <Outlet />
        </main>
      </div>
    );
  }
}

export default App;
