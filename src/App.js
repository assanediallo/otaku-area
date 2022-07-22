
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Men from './components/Men'
import Women from './components/Women'
import Jewelery from './components/Jewelery'
import Electronics from './components/Electronics'

import { useState } from 'react';

function App() {
  const [token, setToken]=useState('')

  return (

    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={ <Login token={token} setToken={setToken}/>}/>
          <Route path="/Men" element={ <Men />}/>
          <Route path="/Women" element={ <Women />}/>
          <Route path="/Jewelery" element={ <Jewelery />}/>
          <Route path="/Electronics" element={ <Electronics />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
