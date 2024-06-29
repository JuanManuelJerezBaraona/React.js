import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand ms-2" to="/">useContext</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <NavLink 
                            className={"nav-link ms-2"}
                            to="/"
                        >
                            Home
                        </NavLink>

                        <NavLink 
                            className={"nav-link ms-2"}
                            to="/login"
                        >
                            Login
                        </NavLink>

                        <NavLink 
                            className={"nav-link ms-2"}
                            to="/about"
                        >
                            About
                        </NavLink>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}
