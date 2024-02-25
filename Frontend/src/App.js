import './App.css';
import Login from './component/Login';
import Home from './pages/Home';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';

function App() {

  const [isAuth, setAuth] = useState(!!localStorage.getItem('anyLoggedIn'));

  return (
    <Router>
      <div className="App">
      
      <Routes>
          <Route exact path="/login" element={<Login setAuth={setAuth} />} />
          {!!localStorage.getItem('anyLoggedIn') ?( <Route path="/home" element={<Home />} >
            <Route path="*" element={<Home />} />
          </Route> ) : (
          <Route path="*" element={<Login setAuth={setAuth}  />} /> )}
          <Route exact path="*" element={<Login setAuth={setAuth} />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;


