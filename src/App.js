import './master.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAllContext } from "./Context";

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import SingleBlog from './pages/SingleBlog'
import SingleProject from './pages/SingleProject'

import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  const { direction } = useAllContext();

  return (
    <div className={`App ${direction}`}>

      <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home/>}/>
        {/* <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blogs/>}/>
        <Route path="/singleBlog/:blogId" element={<SingleBlog/>}/>
        <Route path="/singleProject/:projectId" element={<SingleProject/>}/> */}
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
