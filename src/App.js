import React from 'react';
import MainNav from './components/Navbar/MainNavbar/MainNav';
import SubNav from './components/Navbar/SubNavbar/SubNav';
import Showcase from './components/Showcase/Showcase'
import MobileNav from './components/Navbar/MobileNav/MobileNav';
// boostrap 
import 'bootstrap/dist/css/bootstrap.min.css'
// css 
import './App.css';
import Login from './components/login/Login';

function App() {
  return (
    <>
      <MainNav/>
      <SubNav/>
      <Showcase/>
      <MobileNav/>
    </>
  );
}

export default App;
