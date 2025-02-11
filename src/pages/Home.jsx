import React from "react";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
    return (
        <MainLayout title="Loops & Knots | About Us">
            <div className="container text-center d-flex flex-column flex-grow-1 justify-content-center">
                <h1>About Loops & Knots</h1>
                <p>Welcome to my CS3660 project. I am going to create a web
                    application dedicated to all things knit/crochet. Users will
                    be able to buy, sell, and trade patterns and yarn with other users.
                    It will also serve as a place for users to post tutorial videos.
                </p>
            </div>
        </MainLayout>
    );
};

export default Home;