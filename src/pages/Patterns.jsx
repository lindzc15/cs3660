import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useState, useContext, useEffect } from "react";
import RavelryAPIPatterns from "../pages/ravelryAPI/ravelryAPIPatterns";


const Patterns = () => {
    //tracks state of checked filter checkboxes
    const [selectedFilters, setSelectedFilters] = useState({
        knit: false,
        crochet: false
    });

    //tracks whether user is trying to filter
    const [filtering, setFiltering] = useState(false);
    const [appliedFilters, setAppliedFilters] = useState({});

    //tracks whether filters applied alert is showing
    const [showAlert, setShowAlert] = useState(false);

    //change state of applied filters
    const applyFilters = (e) => {
        e.preventDefault();
        setFiltering(true);
        setAppliedFilters(selectedFilters);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 1500);
    }

    //track changes in filter checkboxes, preparing them to be sent to parent component
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setSelectedFilters(prevState => ({
            ...prevState,
            [name]: checked,
        }));
    };


    //when remove filter clicked, set filtering to false so all yarns will be displayed
    const cancelFilters = (e) => {
        e.preventDefault();
        setFiltering(false);
        setSelectedFilters({ knit: false, crochet: false });
        setAppliedFilters({});
    };
    return (
        <MainLayout title="Patterns">
            {/* holds the search bar and apply filters button */}
            <div className="container-fluid searchPage">
                <div className="row">
                    <div className="col-2 m-3">
                    </div>
                    <div className="col-8 m-3">
                        <form className="form-inline">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success classicButton m-3" onClick={cancelFilters}>
                                <i className="fa-solid fa-xmark"></i>  Remove Filters</button>
                            <button className="btn btn-primary classicButton"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasFilters"
                                aria-controls="pattern-filters">
                                <i className="fa-solid fa-plus"></i> Add filters
                            </button>
                            <button className="btn btn-outline-success classicButton m-3" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* shows filter applied alert when button is pressed */}
            {showAlert && (
                <div className="alert custom-alert position-fixed bottom-0 start-50 translate-middle-x" role="alert">
                    Filters applied!
                </div>
            )}

            {/* container for displaying the patterns */}
            <div className="container-fluid">
                <RavelryAPIPatterns appliedWeightFilters={appliedFilters} filtering={filtering} />
            </div>


            {/*Popup sidebar for setting search filters  */}
            <form onSubmit={applyFilters} className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasFilters" aria-labelledby="pattern-filters">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="pattern-filters">Filters</h5>
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
                                            <input className="form-check-input"
                                                name="crochet"
                                                type="checkbox"
                                                value=""
                                                id="crochet"
                                                checked={selectedFilters.crochet}
                                                onChange={handleCheckboxChange} />
                                            <label className="form-check-label" htmlFor="crochet">
                                                Crochet
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                name="knit"
                                                type="checkbox"
                                                value=""
                                                id="Knit"
                                                checked={selectedFilters.knit}
                                                onChange={handleCheckboxChange} />
                                            <label className="form-check-label" htmlFor="Knit">
                                                Knit
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* button to apply filters */}
                <button type="submit" className="btn btn-primary m-3 classicButton" data-bs-dismiss="offcanvas">
                    Apply Filters
                </button>
            </form>
        </MainLayout >
    );
};

export default Patterns;