import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {

    return(
     <>
            <div>
                <h1 className="agathiName"> Agathi Photography </h1>
                <ul id='navbar'>
                    <li> <Link to='/'> Home </Link> </li>
                    <li> <Link to='maternity'> Maternity </Link> </li>
                    <li> <Link to='wedding'> Wedding </Link></li>
                    <li> <Link to='about'> About </Link> </li>
                    <li> <Link to='booking'> Book </Link></li>
                </ul>
            </div>

            
    </>
    )
    };

export default Navbar;