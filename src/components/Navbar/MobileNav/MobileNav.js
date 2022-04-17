import React from "react";
import WidgetsIcon from '@mui/icons-material/Widgets';
import HomeIcon from '@mui/icons-material/Home';
// css 
import './MobileNav.css'
function MobileNav() {
    return(
    <>
    <section className='mobileNav'>
            <div className="container">
                <HomeIcon
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