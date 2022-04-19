import logo from '../../../assests/img/ign_logo.png'
import SearchIcon from '@mui/icons-material/Search';
// css 
import './MainNav.css'

function MainNav() {
    //const classes = Style();

    //const [open, setOpen] = useState(false);

   // const { photoURL, displayName } = useSelector((state) => state.user);

    //const toggle = () => {
       // setOpen(!open);
       // {/* User info */}
        //<InfoBar key={displayName} Source={<Avatar src={photoURL} />} title={displayName} />
       // {/* Top item */}
    // };
    return (
        <nav>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="logo d-flex align-items-center justify-content-between col-auto">
                        <div className='img'>
                            <img
                                style={{ width: '90%' }}
                                src={logo}
                                // className="col-4"
                                alt="IGN" />
                        </div>
                        <div className="current_date col-auto">
                            <h2 className='day'>Sunday,</h2>
                            <h2 className='month'>October 16</h2>
                        </div>

                    </div>

                    <div className="nav_list col-auto d-flex align-items-center justify-content-between">
                        <ul>
                            <l1><a href="#">News</a></l1>
                            <l1><a href="#">Videos</a></l1>
                            <l1><a href="#">Reviews</a></l1>
                            <l1><a href="#">Shows</a></l1>
                            <l1><a href="#">Wikis</a></l1>
                            <l1><a href="#">More <span></span></a></l1>
                        </ul>
                        <a href="#"><SearchIcon /></a>
                        {/* <img className="user" src={kk} alt="user" /> */}
                        <div className='user'></div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default MainNav;