import React from "react";
import WidgetsIcon from '@mui/icons-material/Widgets';
import HomeIcon from '@mui/icons-material/Home';
// css 
import './MobileNav.css'
function MobileNav({render}) {
    const view =()=>{
        render=''
    }
    return(
    <>
    <section className='mobileNav'>
            <div className="container">
                <HomeIcon
                onClick={view}
                sx={{
                    width: '35px',
                    height: '30px',
                    cursor: 'pointer',
                }}
                />
                <WidgetsIcon
                sx={{
                    fill: 'var(--btn-color)',
                    width: '35px',
                    height: '30px',
                    cursor: 'pointer',
                }}/>
            </div>
    </section>
    </>
    )
}
export default MobileNav