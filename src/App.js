
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

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

  const tests= 
  [{name: "Men"},
  {name:"Women"},
  {name:"Jewelery"},
  {name:"Electronics"}]

  return (
    
    <div className="App">
      <Header>
      <ul className="list_category">
        {tests.map(test=>
          <li>
            <Link to={"/"+test.name}>{test.name}</Link>
          </li>
        )} 
      </ul>
      </Header>
        <Routes>
          <Route path="/Login" element={ <Login token={token} setToken={setToken}/>}/>
          <Route path="/Men" element={ <Men />}/>
          <Route path="/Women" element={ <Women />}/>
          <Route path="/Jewelery" element={ <Jewelery />}/>
          <Route path="/Electronics" element={ <Electronics />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
