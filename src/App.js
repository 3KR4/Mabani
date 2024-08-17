import './master.css';
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAllContext } from "./Context";
import Header from './components/Header';
import Footer from './components/Footer';

const Home       = lazy(() => import('./pages/Home'));
const About      = lazy(() => import('./pages/About'));
const Contact    = lazy(() => import('./pages/Contact'));
const Blogs      = lazy(() => import('./pages/Blogs'));
const SingleBlog = lazy(() => import('./pages/SingleBlog'));
const Project    = lazy(() => import('./pages/Project'));

function App() {
  const { direction } = useAllContext();

  return (
    <div className={`App ${direction}`}>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/singleBlog/:blogId" element={<SingleBlog/>}/>
          <Route path="/projects/:project" element={<Project/>}/>
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  );
}
export default App;