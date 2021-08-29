import logo from './logo.svg';
import './App.css';
import EditResume from './components/editResume/editResume';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <EditResume />
    </div>
  );
}

export default App;
