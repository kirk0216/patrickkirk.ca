import React from 'react';
import './App.css';

import { Navigation } from './Navigation';
import { Welcome } from './Welcome';

interface AppState {
  currentContent: React.Component;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentContent: new Welcome({})
    }
  }

  render() {
    return (
      <div className='container bg-white vh-100'>
        <div className='d-flex flex-column h-100'>
          <Navigation app={this} />

          <main className='flex-fill align-self-stretch border rounded my-2'>
            {this.state.currentContent.render()}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
