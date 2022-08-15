import React  from 'react';
import './App.css';
import Search from './Search'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <div className = "container">
      <div className = "search-body">
      <h1>Weather Search Engine</h1>
      <Search />
      </div>
      <div className="repository-link">
        
        <p> This app was coded by <a href='https://agitated-wilson-c1607b.netlify.app/' target="_blank" rel="noopener noreferrer"> Sarah Gibson </a> and is open-sourced on
         <a href='https://github.com/sarahgibsonnnn/weather-react' target="_blank" rel="noopener noreferrer" title="Open GitHub Repository" >
         <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" />
         </a>
        </p>
       </div>
       </div>
    </div>
  );
}

export default App;
