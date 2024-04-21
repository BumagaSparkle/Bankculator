import { Route, Routes, Link } from 'react-router-dom';
import './Main.css';
import Calc from './Content/Calculator';
import Header from './Content/Header';
import Footer from './Content/Footer';
import Admin from './admin/Admin';
import React from 'react';

const CalcObject = {
  id: 1,
  name: 'КАЛЬКУЛЯТОР'
}

function Main() {
  return (
    <>
      <Header />
      <div className="Main">
        <div className="content">
          <p className="link1">{CalcObject.name}</p>
          <Link to="/Calc" className="btn">Перейти к калькулятору</Link>
          <br />
          <Link to="/Admin" className="btn">Перейти в админ панель</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
