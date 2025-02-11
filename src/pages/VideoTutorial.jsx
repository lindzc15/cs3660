import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";

const VideoTutorial = () => {
    const navigate = useNavigate();
    return (
        <MainLayout title="Tutorial Video">
            <button type="button" class="btn btn-primary classicButton backButton m-3" onClick={() => navigate("/Tutorials")}>{"<  "}Back</button>
            <div className="container text-center d-flex flex-column flex-grow-1 justify-content-center align-items-center">
                {/* Video iframe with width and height controlled */}
                <iframe
                    className="w-75"
                    height="400" // Set a fixed height to match the card's height or adjust as needed
                    src="https://www.youtube.com/embed/ZwZLCaYPhTk"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                {/* Card with same width as video */}
                <div className="card m-3 w-75">
                    <div className="card-header">
                        <h4>Slip Stitch Tutorial</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Learn the slip stitch, a fundamental crochet stitch</li>
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
};


export default VideoTutorial;