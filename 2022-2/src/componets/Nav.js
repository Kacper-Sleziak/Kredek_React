import '../css/nav.css'
import pizza_logo from '../images/pizza_logo.jpg'

function Nav() {
    return(
        <div
        id="nav"
        >
            <img
            id="logo"
            src={pizza_logo}
            alt="logo_nav"
            >
            
            </img>

            <h1
            id="header"
            >
                Kredek Pizza Factory 2022-2
            </h1>
        </div>
    )
}

export default Nav;