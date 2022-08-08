import React  from 'react';
import './App.css';
import Search from './Search'

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <div className="repository-link">
        
       <a href='https://github.com/sarahgibsonnnn/weather-react' target="_blank" rel="noopener noreferrer" title="Open GitHub Repository" >
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" />
        </a>
      </div>
    
    </div>
  );
}

export default App;
