import React from "react";
import MainLayout from "../layouts/MainLayout";

const Profile = () => {
    return (
        <MainLayout title="My Profile">
            <div className="container-fluid d-flex flex-column flex-grow-1 justify-content-center align-items-center mt-3">
                <h2>Welcome back!</h2>
                <div className="row w-100">
                    <div className="col-3 d-flex justify-content-center">
                        <div className="card profileCard m-3" style={{ width: '20rem', cursor: "pointer" }}>
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">Account Info</h5>
                                <p className="card-text">This would allow user to edit profile/account</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                        <div className="card profileCard m-3" style={{ width: '20rem', cursor: "pointer" }}>
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">Favorites</h5>
                                <p className="card-text">View favorite patterns/yarns/tutorials</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                        <div className="card profileCard m-3" style={{ width: '20rem', cursor: "pointer" }}>
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">Orders</h5>
                                <p className="card-text">Track orders and see order history</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                        <div className="card profileCard m-3" style={{ width: '20rem', cursor: "pointer" }}>
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">My Listings</h5>
                                <p className="card-text">Let user see the yarn/patterns they have for sale</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Profile;