import { NavLink } from "react-router-dom";
import "../index.css";

export const Navbar = () => {
    const navLinksStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'black' : '',
         }

    }

    return(
     <>
            <nav>
                <h1 className="agathiName"> Agathi Photography </h1>
                <ul id='navbar'>
                    <li> <NavLink style={navLinksStyle} to='/'> Home </NavLink> </li>
                    <li> <NavLink style={navLinksStyle} to='maternity'> Maternity </NavLink> </li>
                    <li> <NavLink style={navLinksStyle} to='wedding'> Wedding </NavLink></li>
                    <li> <NavLink style={navLinksStyle} to='about'> About </NavLink> </li>
                    <li> <NavLink style={navLinksStyle} to='booking'> Book </NavLink></li>
                </ul>
            </nav>
    </>
    )
    };

export default Navbar;