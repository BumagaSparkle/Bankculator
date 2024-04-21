import React, {useState} from 'react';
import './App.css';
import Main from './Main';
import Calc from './Content/Calculator';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Panel from './admin/Admin'


function App() {


      return (
        <div className
        ="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Admin" element={<Panel />} />
        <Route path="/Calc" element={<Calc />} />
      </Routes>
    </BrowserRouter>
        </div>
      );
      
  }

export default App;
