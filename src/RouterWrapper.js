import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Headers from './Headers';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/Services';
import News from '../Pages/News';
import Contact from '../Pages/Contact';
import ReadPage from '../Pages/ReadPage';
const RouterWrapper = ()=>{
    return(
        <>
          <BrowserRouter>
              <Headers/>  
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/ReadPage/:id' element={<ReadPage/>}/>
              </Routes>
          </BrowserRouter>
        </>
    );
}
export default RouterWrapper;