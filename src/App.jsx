import { useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './views/Home/Home';
import Poke from './views/Poke/Poke';
import Details from './views/Details/Details';
import Navbar from './components/Navbar/Navbar';
import './App.css';



function App() {

  const {pathname} = useLocation();
  return (
    <>

      {pathname !== '/' && <Navbar></Navbar>}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/poke" element={<Poke/>}></Route>
        <Route path='/details/:id' element={<Details/>}></Route>
      </Routes>
    </>
  )
}

export default App
