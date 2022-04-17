// css 
import './SubNav.css'
function SubNav() {
    return ( 
       <>
        <div className="subnav">
            <div className="container ">
                <ul className='row d-flex align-items-center justify-content-between col '>
                    <li className='col'><a href="#">Kingdom Hearts |||</a></li>
                    <li className='col'><a href="#">The Walking Dead</a></li>
                    <li className='col'><a href="#">God Of War</a></li>
                    <li className='col-3 '><a href="#">Marvel's The Avengers: Inifinity War</a></li>
                    <li className='col'><a href="#">Super Trooers 2</a></li>
                    <li className='col'><a href="#">Marvel's The Defenders</a></li>
                </ul>
            </div>       
        </div> 
       </>
     );
}


export default SubNav;