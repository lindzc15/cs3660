import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { isLoggedIn, login } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/profile");
        }
    }, [isLoggedIn, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("both fields are required");
            return;
        }

        if (login(email, password)) {
            navigate("/profile");
        }
        else {
            setError("Invalid email and password");
        }


    }

    return (
        <MainLayout title="Login | Loops & Knots">
            <div className="container d-flex flex-column flex-grow-1 justify-content-center">
                <div className="row">
                    <div className="col-4 offset-4 text-center">
                        <h3 className="text-center mb-4">Login</h3>
                        {/* if error true, shows code on right side */}
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 form-floating">
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="floatingEmail"
                                    placeholder=""
                                />
                                <label className="form-label" htmlFor="floatingEmail">Email Address</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="floatingPassword"
                                    placeholder=""
                                />
                                <label className="form-label" htmlFor="floatingPassword">Password</label>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3 classicButton">
                                Log in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Login