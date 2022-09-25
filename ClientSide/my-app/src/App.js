import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./Components/NavbarCom/Navbar";
import Post from "./Components/Post";
import CommonPage from "./Pages/CommonPage";
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/:category" element={<CommonPage/>}/>
      <Route path="/:category/:id" element={<Post />}/>



    </Routes>

    </BrowserRouter>
    
    </>
  );
}

export default App;
