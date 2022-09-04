import React from 'react';
import './App.css';

import envelope from 'bootstrap-icons/icons/envelope.svg';
import linkedin from 'bootstrap-icons/icons/linkedin.svg';
import github from 'bootstrap-icons/icons/github.svg';

function App() {
  return (
    <div className='App'>
      <main className='vw-100 vh-100 bg-light'>
        <div className='position-absolute top-50 start-50 translate-middle border p-5 rounded bg-white'>
          <h1 className='text-center'>Patrick Kirk</h1>
          <p className='text-muted text-center'>Software Developer</p>
          <ul className='list-group list-group-flush bg-white'>
            <li className='list-group-item'><img src={envelope} alt='Email' /> <a href='mailto:pat.kirk@gmail.com'>pat.kirk@gmail.com</a></li>
            <li className='list-group-item'><img src={linkedin} alt='Linked In' /> <a href='https://www.linkedin.com/in/patrick-j-kirk/' target='_blank' rel='noreferrer'>patrick-j-kirk</a></li>
            <li className='list-group-item'><img src={github} alt='GitHub' /> <a href='https://github.com/kirk0216' target='_blank' rel='noreferrer'>kirk0216</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
