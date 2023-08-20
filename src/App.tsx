import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Template from './pages/Template';
import Nav from './component/nav';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={< Template />} />
      </Routes>
    </Router>
  );
}

export default App;
