
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import { useState } from 'react';

function App() {
  const [token, setToken]=useState('')

  return (

    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={ <Login token={token} setToken={setToken}/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
