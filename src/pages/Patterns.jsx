import React from "react";
import MainLayout from "../layouts/MainLayout";

const PATTERN_IMAGES = {
    pattern1: "https://raw.githubusercontent.com/lindzc15/3660-project-images/main/pattern1.jpg",
    pattern2: "https://raw.githubusercontent.com/lindzc15/3660-project-images/main/pattern2.jpg",
    pattern3: "https://raw.githubusercontent.com/lindzc15/3660-project-images/main/pattern3.jpg",
    pattern4: "https://raw.githubusercontent.com/lindzc15/3660-project-images/main/pattern4.jpg",
    pattern5: "https://raw.githubusercontent.com/lindzc15/3660-project-images/main/pattern5.jpg",
    pattern6: "https://raw.githubusercontent.com/lindzc15/3660-project-images/main/pattern6.jpg",
    pattern7: "https://raw.githubusercontent.com/lindzc15/3660-project-images/main/pattern7.jpg",
};



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

const Patterns = () => {
    return (
        <MainLayout title="Patterns">
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

            {/* container for displaying the yarns */}
            <div className="container-fluid">
                <div className="row">
                    {Object.keys(PATTERN_IMAGES).map((key) => (
                        <div className="card m-4" style={{ width: '20rem', cursor: "pointer" }} key={key}>
                            <img src={PATTERN_IMAGES[key]} className="card-img-top mt-2" alt={key} />
                            <div className="card-body">
                                <p className="card-text">{`${key} description or details here.`}</p>
                            </div>
                        </div>
                    ))}
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
                                        Pattern Type
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
                            {/* Accordian with checkboxes for product type */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#productType" aria-expanded="false" aria-controls="productType">
                                        Product Type
                                    </button>
                                </h2>
                                <div id="productType" className="accordion-collapse collapse" aria-labelledby="productType" data-bs-parent="#filters">
                                    <div className="accordion-body">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="clothing" />
                                            <label className="form-check-label" htmlFor="clothing">
                                                Clothing
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="Blankets" />
                                            <label className="form-check-label" htmlFor="Blankets">
                                                Blankets
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="Bags" />
                                            <label className="form-check-label" htmlFor="Bags">
                                                Bags
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="Accessories" />
                                            <label className="form-check-label" htmlFor="Accessories">
                                                Accessories
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="homeDecor" />
                                            <label className="form-check-label" htmlFor="homeDecor">
                                                Home Decor
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="stuffedAnimals" />
                                            <label className="form-check-label" htmlFor="stuffedAnimals">
                                                Stuffed Animals
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

export default Patterns;