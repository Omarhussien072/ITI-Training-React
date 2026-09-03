import { NavLink } from "react-router-dom";
import NavbarStyles from './Navbar.module.css';
export default function Navbar() {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light p-2 ${NavbarStyles.navbar}`}>
                <NavLink className="navbar-brand  text-white" to="/">PizzaCut</NavLink>
                <div className="collapse navbar-collapse d-flex justify-content-end align-items-center me-5" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active d-flex gap-5 justify-content-center align-items-center">
                        <NavLink className={`nav-link p-2 text-white`} to='/home'>Home</NavLink>
                        <NavLink className={`nav-link p-2 text-white`} to='/pizza'>Pizza</NavLink>
                        <NavLink className={`nav-link p-2 text-white`} to='/register'>Register</NavLink>
                        <NavLink className={`nav-link p-2 text-white`} to='/products'>Products</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>

        </>
    );
}
