import React from 'react';
import './styles/App.scss';
import { Route } from 'react-router-dom';
import Results from './components/Results';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Route component={Home} path='/' />
      <Route component={Results} path='/items' />
    </div>
  );
}

export default App;
