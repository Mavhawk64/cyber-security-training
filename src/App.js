import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Link from 'react';

// import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <DownloadButton>
        </DownloadButton>
      </header>
    </div>
  );
}

const DownloadButton = () => {
  const [show, toggleShow] = useState(true);
  const componentDidMount = () => {
    window.setTimeout(function () {
      toggleShow(false);
    }, 5000);
  };
  return (
    <>
    {show && <img src={logo} className="App-logo" alt="logo"/>}
    {show && <Button href="https://www.youtube.com/watch?v=wygwHXYj_TI&t" target="_blank" variant="outline-success" onClick={() => toggleShow(false)}>Download Free Movies and Games App!</Button>}
    {!show && <h1>You failed the cyber security test. Please watch the video.</h1>}
    </>
  );
};
export default App;
