import React from 'react';
import './styles/App.scss';
import SearchBox from './components/SearchBox';
import Results from './components/Results';

function App() {
  return (
    <div>
      <SearchBox />
      <Results />
    </div>
  );
}

export default App;
