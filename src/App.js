import './App.css';
import ToDo from './ToDo';
import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import About from './About';


function App() {

  return (
    <div >
      <header className='head' >
      <button className='todo'> <Link to='/' >ToDo</Link></button>
      <button className='about'> <Link to='/about'>About</Link></button>  
      </header>
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/about" element={<About/>}/>     
      </Routes>
    </div>
  );
}

export default App;