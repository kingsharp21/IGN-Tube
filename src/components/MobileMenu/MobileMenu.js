import React from "react";
import'./MobileMenu.css'

import HomeIcon from '@mui/icons-material/Home';

function MobileMenu({classname}) {
    return ( 
        <>
        <div className={`mobile_menu ${classname}`}>
                    <ul className="container">
                        <li><a href="#"><HomeIcon sx={{
                            width: '50px',
                            height: '35px',
                            cursor: 'pointer',
                        }}/> News</a></li>

                        <li><a href="#"><HomeIcon sx={{
                            width: '50px',
                            height: '35px',
                            cursor: 'pointer',
                        }}/> Videos</a></li>

                        <li><a href="#"><HomeIcon sx={{
                            width: '50px',
                            height: '35px',
                            cursor: 'pointer',
                        }}/> Reviews</a></li>

                        <li><a href="#"><HomeIcon sx={{
                            width: '50px',
                            height: '35px',
                            cursor: 'pointer',
                        }}/> Shows</a></li>

                        <li><a href="#"><HomeIcon sx={{
                            width: '50px',
                            height: '35px',
                            cursor: 'pointer',
                        }}/> Wikis</a></li>

                        <li><a href="#"><HomeIcon sx={{
                            width: '50px',
                            height: '35px',
                            cursor: 'pointer',
                        }}/> More</a></li>
                    </ul>

            </div>
        </>
     );
}

export default MobileMenu;