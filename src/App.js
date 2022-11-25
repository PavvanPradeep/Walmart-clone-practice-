
import './App.css';
import Lenovo from './components/Lenovo';
import Mac from './components/Mac';
import Navbar from './components/Navbar';
import Xps from './components/Xps';
import React from 'react'

function App() {
  
  return (
   <>
        <Navbar/>
        <Mac/>
        <Lenovo/>
        <Xps/>
   </>
  );
}

export default App;
