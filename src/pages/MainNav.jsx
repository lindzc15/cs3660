import React from "react";
import { Link } from "react-router-dom";


const BRAND_IMAGES = {
    mainlogo: "https://raw.githubusercontent.com/lindzc15/3660-project-images/main/logo.png"
}

const MainNav = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            {/* for the love of god don't change container-fluid */}
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={BRAND_IMAGES.mainlogo} alt="logo" width="80" height="60"></img>
                    <span className="ms-2 navText brand-name">Loops & Knots</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link navText" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navText" to="/yarn">Yarn</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navText" to="/patterns">Patterns</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navText" to="/tutorials">Tutorials</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navText" to="/login">My Profile</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MainNav;

