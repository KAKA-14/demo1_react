import { Link } from "react-router-dom";
function Nav(){
    return(
        <div>
            <nav className="navbar bg-dark">
                <Link to="#" className="nav-brand nav-link text-primary">Ethnus</Link>
                <div class="nav">
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/Csontact" className="nav-link">Contact</Link>
                <Link to="#" className="nav-link">Login</Link>
                </div>
            </nav>
        </div>
    )
}
export default Nav;