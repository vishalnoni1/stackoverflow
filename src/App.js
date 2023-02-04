
import './App.css';
import React from 'react'
import Navbar from './components/navbar/navbar'
import{BrowserRouter as Router}from 'react-router-dom'
import AllRoutes from './components/AllRoutes'



function App() {
  return (
      <div className="App">
 <Router >
        <Navbar />
        <AllRoutes />
      </Router >
      </div>
  );
}

export default App;
