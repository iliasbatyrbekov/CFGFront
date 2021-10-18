// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Teams from './pages/team';

// import Optin from "./components/Optin/Optin";

import "./App.css";


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Router>
          <Navbar />
          <Switch>
            {/* <Route exact path="/">
                <Redirect to="/home" />
            </Route> */}
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/past' component={Teams} />
            <Route path='/egg' component={
              () => { 
                window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'; 
                return null;}
              }
            />
          </Switch>
        </Router>
      {/* </header> */}
    </div>
  );
}

export default App;


/*

<p>
    Edit <code>src/App.tsx</code> and save to reload.
  </p>
  <span>
    <span>Learn </span>
    <a
      className="App-link"
      href="https://reactjs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      React
    </a>
    <span>, </span>
    <a
      className="App-link"
      href="https://redux.js.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Redux
    </a>
    <span>, </span>
    <a
      className="App-link"
      href="https://redux-toolkit.js.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Redux Toolkit
    </a>
    ,<span> and </span>
    <a
      className="App-link"
      href="https://react-redux.js.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      React Redux
    </a>
  </span>

*/