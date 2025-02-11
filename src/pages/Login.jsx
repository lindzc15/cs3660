import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const EasyButton = ({ setLoggedIn }) => {
    return (
        <button onClick={() => setLoggedIn(true)} className="btn btn-primary mt-3 classicButton">
            Log in
        </button>
    );
};

const Profile = ({ userName }) => {
    // Default userName to "User" if it's empty
    const displayName = userName || "User";

    return (
        <div className="container-fluid d-flex flex-column flex-grow-1 justify-content-center align-items-center mt-3">
            <h2>Welcome back, {displayName}!</h2>
            <div className="row w-100">
                <div className="col-3 d-flex justify-content-center">
                    <div class="card profileCard m-3" style={{ width: '20rem', cursor: "pointer" }}>
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Account Info</h5>
                            <p class="card-text">This would allow user to edit profile/account</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <div class="card profileCard m-3" style={{ width: '20rem', cursor: "pointer" }}>
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Favorites</h5>
                            <p class="card-text">View favorite patterns/yarns/tutorials</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <div class="card profileCard m-3" style={{ width: '20rem', cursor: "pointer" }}>
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Orders</h5>
                            <p class="card-text">Track orders and see order history</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <div class="card profileCard m-3" style={{ width: '20rem', cursor: "pointer" }}>
                        <div class="card-body">
                            <h5 class="card-title fw-bold">My Listings</h5>
                            <p class="card-text">Let user see the yarn/patterns they have for sale</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const EnterLogin = ({ setUserName, setLoggedIn }) => {
    return (
        <div className="container d-flex flex-column flex-grow-1 justify-content-center">
            <div className="row">
                <div className="col-4 offset-4 text-center">
                    <div id="login-stuff">
                        <h2 className="mb-3">Log in</h2>
                        <div className="form-floating mb-3">
                            <input
                                onChange={(e) => setUserName(e.target.value)}
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <EasyButton setLoggedIn={setLoggedIn} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    return (
        <MainLayout title="Login">
            <div className="container d-flex flex-column flex-grow-1 justify-content-center">
                {loggedIn ? (
                    <Profile userName={userName} />
                ) : (
                    <EnterLogin setUserName={setUserName} setLoggedIn={setLoggedIn} />
                )}
            </div>
        </MainLayout>
    );
};

export default Login;


