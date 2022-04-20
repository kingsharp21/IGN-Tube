import React,{useState} from 'react';
import MainNav from './components/Navbar/MainNavbar/MainNav';
import SubNav from './components/Navbar/SubNavbar/SubNav';
import Showcase from './components/Showcase/Showcase'
import MobileNav from './components/Navbar/MobileNav/MobileNav';
import WidgetsIcon from '@mui/icons-material/Widgets';
import HomeIcon from '@mui/icons-material/Home';
// boostrap 
import 'bootstrap/dist/css/bootstrap.min.css'
// css 
import './App.css';
import Login from './components/login/Login';

function App() {
  const [showcase, setShowcase] = useState('');
  const [navlist, setNavlist] = useState('hidden');
  const [homeicon, setHomeicon] = useState('var(--btn-color)');
  const [widgetsicon, setWidgetsIcon] = useState('');
    const renderShowcase = () => {
      setShowcase('show')
      setNavlist('hidden')
      setHomeicon('var(--btn-color)')
      setWidgetsIcon('')
    }
    const renderVideoList = () => {
      setShowcase('hidden')
      setNavlist('show')
      setHomeicon('')
      setWidgetsIcon('var(--btn-color)')
    }
  
  return (
    <>
      <MainNav/>
      <SubNav
      // navlist={navlist} 
      showcase={showcase}  
      />
      <Showcase 
        showcase={showcase}  
        navlist={navlist}    
      />
      {/* <MobileNav/> */}
      {/* this is the buttom nav in mobile view */}
      <section className='mobileNav'>
                <div className="container">
                    <HomeIcon
                        onClick={renderShowcase}
                        sx={{
                            fill: homeicon,
                            width: '35px',
                            height: '30px',
                            cursor: 'pointer',
                        }}
                    />
                    <WidgetsIcon
                        onClick={renderVideoList}
                        sx={{
                            fill: widgetsicon,
                            width: '35px',
                            height: '30px',
                            cursor: 'pointer',
                        }} />
                </div>

            </section>
    </>
  );
}

export default App;
