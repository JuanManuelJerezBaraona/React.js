import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate();
  
  const onLogout = () => {
    navigate('/login', {
      replace: true
    });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand ms-2" to="/">Heroes</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-center">

            <NavLink
              className={"nav-link ms-2"}
              to="/marvel"
            >
              Marvel
            </NavLink>

            <NavLink
              className={"nav-link ms-2"}
              to="/dc"
            >
              DC
            </NavLink>

            <span className="nav-link text-primary ms-2">
              Juan
            </span>

            <button 
              onClick={onLogout}
              className="nav-link btn">
              Logout
            </button>

          </ul>
        </div>
      </div>
    </nav>
  );
}
