import React from 'react';
import Home from './home/Home';
import { Route, Routes } from 'react-router-dom';
import Courses from './course/Courses';
import Signup from './component/signup';
import Login from './component/login';



function App() {
  return (
  <>
 <div className='dark:-salte-900 dark:text-white'>
 <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Course" element={<Courses/>}/>
<Route path="/signup" element={<Signup/>}/>
    </Routes>
 </div>
  </>
  );
}

export default App;
