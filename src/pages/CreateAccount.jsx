import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    //tracks whether filters applied alert is showing
    const [showAlert, setShowAlert] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // POST request to backend to attempt login
            const response = await fetch("http://127.0.0.1:8080/api/login/register", {
                method: "POST",

                // send user and pass for verification
                body: JSON.stringify({
                    username: email,
                    password: password,
                    name: name,
                }),

                // Adding headers to the request
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).catch(error => {
                console.log("in fetch catch", error);
                setError("Error creating account");
                return false;
            })

            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData.detail);
                setError(errorData.detail);
                return false;

            }

            //get response in json
            const createSuccess = await response.json();
            //if success is true, show message and return to login page
            if (createSuccess.success) {
                setError("");
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                    navigate("/login");
                }, 1500);
            }
        }
        catch (error) {
            console.log("in the catch", error);
            setError("Error creating account");
        }
    }
    return (
        <MainLayout title="Login | Loops & Knots">
            <div className="container d-flex flex-column flex-grow-1 justify-content-center">
                <div className="row ms-auto me-auto w-25 mt-4 mb-4">
                    {/* shows account created alert when successful creation*/}
                    {showAlert && (
                        <div className="alert custom-alert" role="alert">
                            Account Created!
                        </div>
                    )}
                    {/* if error true, shows code on right side */}
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="text-center">
                        <h3 className="text-center mb-4">Create Account</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="col-md-12 col-lg-12 mb-3 form-floating">
                                <input
                                    className="form-control"
                                    id="floatingName"
                                    placeholder=""
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label className="form-label" htmlFor="floatingName">Name</label>
                            </div>
                            <div className="col-md-12 col-lg-12 mb-3 form-floating">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingEmail"
                                    placeholder=""
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label className="form-label" htmlFor="floatingEmail">Email Address</label>
                            </div>
                            <div className="col-md-12 col-lg-12 mb-3 form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder=""
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label className="form-label" htmlFor="floatingPassword">Password</label>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3 classicButton">
                                Create Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default CreateAccount