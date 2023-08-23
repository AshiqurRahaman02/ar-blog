import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Template from './pages/Template';
import Nav from './component/nav';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={< Template />} />
        {/* <Route path="/template" element={< Template />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
