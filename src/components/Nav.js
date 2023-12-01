import '../styles/nav.css'
import { Outlet, Link } from "react-router-dom";
import logo from '../assets/logo.jpg'

function Nav(){
    return(
    <>
    <div className="header"> 
     <img src = {logo} alt='logo de la bibliothèque' className='logo'></img>

    </div>

    <nav className="navBar">
        <ul className="navbar-links">
            <li className="navbar-items"> <Link to="/" className="navbar-lien">Membre</Link></li>
            <li className="navbar-items"> <Link to="/FormBook" className="navbar-lien">Livre</Link></li>
            <li className="navbar-items"> <Link to="/Formbook" className="navbar-lien">Prët d'un livre</Link></li>
        </ul>
    </nav>
     <Outlet />
    </>
    )
};

export default Nav;