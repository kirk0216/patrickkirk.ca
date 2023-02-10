import React from 'react';
import './App.css';

import { Navigation } from './Navigation';
import { Outlet } from 'react-router-dom';

import { Envelope, Github, Linkedin } from 'react-bootstrap-icons';

class App extends React.Component {
  render() {
    return (
      <div className='d-flex flex-column flex-fill h-100 bg-white min-vh-100 w-50 mx-auto'>
        <Navigation app={this} />

        <main className='align-self-stretch my-2 flex-grow-1'>
          <Outlet />
        </main>

        <footer className='row py-3 mx-1 border-top'>
          <div className='col-3'>
            <h3>Patrick Kirk</h3>
            <ul className='list-unstyled'>
              <li className='text-muted'>Software Developer</li>
              <li className='text-muted'>Ontario, Canada</li>
            </ul>
          </div>

          <div className='col'>
            <h5 id='contact'>Contact</h5>
            <ul className='list-group list-group-flush text-start'>
              <li className='list-group-item'><Envelope /> <a href='mailto:pat.kirk@gmail.com'>pat.kirk@gmail.com</a></li>
              <li className='list-group-item'><Linkedin /> <a href='https://www.linkedin.com/in/patrick-j-kirk/' target='_blank' rel='noreferrer'>patrick-j-kirk</a></li>
              <li className='list-group-item'><Github /> <a href='https://github.com/kirk0216' target='_blank' rel='noreferrer'>kirk0216</a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
