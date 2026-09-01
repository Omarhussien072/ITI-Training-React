import { NavLink } from "react-router-dom";
import NavbarStyles from './Navbar.module.css';
export default function Navbar() {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light p-3 ${NavbarStyles.navbar}`}>
                <NavLink className="navbar-brand  text-white" to="/">PetyStore</NavLink>
                <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end align-items-center me-5" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active d-flex gap-5 justify-content-center align-items-center">
                        <NavLink className={`nav-link p-2 text-white`} to='/home'>Home</NavLink>
                        <NavLink className={`nav-link p-2 text-white`} to='/about'>About</NavLink>
                        <NavLink className={`nav-link p-2 text-white`} to='/petCategories'>Pets</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>

        </>
    );
}
