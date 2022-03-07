import React from 'react';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
    <Header />
    <Router>
      <Routes>
        <Route exact path='/' element={<h1></h1>}/>
        <Route path='/articles' element={<h1>articles here!</h1>} />
        <Route path='/user' element={<h1>user here!</h1>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
