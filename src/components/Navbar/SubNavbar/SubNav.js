// css 
import './SubNav.css'
function SubNav({showcase}) {
    return ( 
       <>
        <div className={`subnav ${showcase}`}>
            <div className="container ">
                <ul>
                    <li><a href="#">Kingdom Hearts |||</a></li>
                    <li><a href="#">The Walking Dead</a></li>
                    <li><a href="#">God Of War</a></li>
                    <li><a href="#">Marvel's The Avengers: Inifinity War</a></li>
                    <li><a href="#">Super Trooers 2</a></li>
                    <li><a href="#">Marvel's The Defenders</a></li>
                </ul>
            </div>       
        </div> 
       </>
     );
}


export default SubNav;