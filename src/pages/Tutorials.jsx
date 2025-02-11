import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";




const SetFilterBttn = () => {
    const applyFilters = () => {
        alert("Filters applied!");
    }
    return (
        <button onClick={() => applyFilters()} className="btn btn-primary m-3 classicButton" data-bs-dismiss="offcanvas">
            Apply Filters
        </button>
    );
};


const Tutorials = () => {
    const navigate = useNavigate();
    return (
        <MainLayout title="Tutorials">
            {/* holds the search bar and apply filters button */}
            <div className="container-fluid searchPage">
                <div className="row">
                    <div className="col-2 m-3">
                        <button className="btn btn-primary classicButton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilters" aria-controls="yarn-filters">
                            Add filters
                        </button>
                    </div>
                    <div className="col-8 m-3">
                        <form className="form-inline">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success classicButton m-3" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* container for displaying the tutorials posted */}
            <div className="container-fluid">
                <div className="row">
                    <div className="card m-4" style={{ width: '20rem', cursor: "pointer" }} onClick={() => navigate("/videotutorial")}>
                        <div className="card-body">
                            <h5 className="card-title">Slip Stitch</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary"> by KnitGirl5678</h6>
                            <p className="card-text">Learn the foundations with this tutorial!</p>
                        </div>
                    </div>
                    <div className="card m-4" style={{ width: '20rem', cursor: "pointer" }} onClick={() => navigate("/videotutorial")}>
                        <div className="card-body">
                            <h5 className="card-title">Double Crochet Stitch</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary"> by KnitGirl5678</h6>
                            <p className="card-text">A slow motion video</p>
                        </div>
                    </div>
                    <div className="card m-4" style={{ width: '20rem', cursor: "pointer" }} onClick={() => navigate("/videotutorial")}>
                        <div className="card-body">
                            <h5 className="card-title">Single Crochet Stitch</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary"> by KnitGirl5678</h6>
                            <p className="card-text">Pretend these all open different videos</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*Popup sidebar for setting search filters  */}
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasFilters" aria-labelledby="yarn-filters">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="yarn-filters">Filters</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <div className="accordion" id="filters">
                            {/* Accordian with checkboxes for pattern type (knit or crochet) */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#patternType" aria-expanded="false" aria-controls="patternType">
                                        Type
                                    </button>
                                </h2>
                                <div id="patternType" className="accordion-collapse collapse" aria-labelledby="patternType" data-bs-parent="#filters">
                                    <div className="accordion-body">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="crochet" />
                                            <label className="form-check-label" htmlFor="crochet">
                                                Crochet
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="Knit" />
                                            <label className="form-check-label" htmlFor="Knit">
                                                Knit
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Accordian with checkboxes for pattern difficulty */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#patternDifficulty" aria-expanded="false" aria-controls="patternDifficulty">
                                        Difficulty
                                    </button>
                                </h2>
                                <div id="patternDifficulty" className="accordion-collapse collapse" aria-labelledby="patternDifficulty" data-bs-parent="#filters">
                                    <div className="accordion-body">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="Beginner" />
                                            <label className="form-check-label" htmlFor="Beginner">
                                                Beginner
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="Easy" />
                                            <label className="form-check-label" htmlFor="Easy">
                                                Easy
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="Intermediate" />
                                            <label className="form-check-label" htmlFor="Intermediate">
                                                Intermediate
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="Advanced" />
                                            <label className="form-check-label" htmlFor="Advanced">
                                                Advanced
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* button to apply filters */}
                <SetFilterBttn />
            </div>
        </MainLayout >
    );
};

export default Tutorials;