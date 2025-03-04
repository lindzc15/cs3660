import React from "react";
import { useState, useContext, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import RavelryAPIYarns from "../pages/ravelryAPI/ravelryAPIYarns";


const Yarn = () => {
    //tracks state of checked filter checkboxes
    const [selectedWeightFilters, setSelectedWeightFilters] = useState({
        thread: false,
        cobweb: false,
        lace: false,
        lightFingering: false,
        fingering: false,
        sport: false,
        dk: false,
        aran: false,
        worsted: false,
        bulky: false,
        superBulky: false,
        jumbo: false
    });

    //tracks whether user is trying to filter
    const [filtering, setFiltering] = useState(false);
    const [appliedWeightFilters, setAppliedWeightFilters] = useState({});

    //tracks whether filters applied alert is showing
    const [showAlert, setShowAlert] = useState(false);


    //change state of applied filters
    const applyFilters = (e) => {
        e.preventDefault();
        setFiltering(true);
        setAppliedWeightFilters(selectedWeightFilters);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 1500);
    }


    //track changes in filter checkboxes, preparing them to be sent to parent component
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setSelectedWeightFilters((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    //when remove filter clicked, set filtering to false so all yarns will be displayed
    const cancelFilters = (e) => {
        e.preventDefault();
        setFiltering(false);
    }


    return (
        <MainLayout title="Yarn">
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
                                aria-controls="yarn-filters">
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


            {/* container for displaying the yarns */}
            <div className="container-fluid">
                <RavelryAPIYarns appliedWeightFilters={appliedWeightFilters} filtering={filtering} />
            </div>



            {/*Popup sidebar for setting search filters  */}
            {/* Make this more dynamic when refactoring to shorten code */}
            <form onSubmit={applyFilters} className="offcanvas offcanvas-start"
                tabIndex="-1" id="offcanvasFilters"
                aria-labelledby="yarn-filters">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="yarn-filters">Filters</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <div className="accordion" id="filters">
                            {/* Accordian with checkboxes for yarn weight */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#yarnWeight"
                                        aria-expanded="false"
                                        aria-controls="yarnWeight">
                                        Weight
                                    </button>
                                </h2>
                                <div id="yarnWeight" className="accordion-collapse collapse"
                                    aria-labelledby="yarnWeight"
                                    data-bs-parent="#filters">
                                    <div className="accordion-body">
                                        <div className="form-check">
                                            <input
                                                name="thread"
                                                checked={selectedWeightFilters.thread}
                                                onChange={handleCheckboxChange}
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="weight0" />
                                            <label className="form-check-label" htmlFor="weight0">
                                                Thread (#0)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="cobweb"
                                                checked={selectedWeightFilters.cobweb}
                                                onChange={handleCheckboxChange}
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="weight0" />
                                            <label className="form-check-label" htmlFor="weight0">
                                                Cobweb (#0)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="lace"
                                                checked={selectedWeightFilters.lace}
                                                onChange={handleCheckboxChange}
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="weight0" />
                                            <label className="form-check-label" htmlFor="weight0">
                                                Lace (#0)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="lightFingering"
                                                checked={selectedWeightFilters.lightFingering}
                                                onChange={handleCheckboxChange}
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="weight1" />
                                            <label className="form-check-label" htmlFor="weight1">
                                                Light Fingering (#0)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="fingering"
                                                checked={selectedWeightFilters.fingering}
                                                onChange={handleCheckboxChange}
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="weight1" />
                                            <label className="form-check-label" htmlFor="weight1">
                                                Fingering (#1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="sport"
                                                checked={selectedWeightFilters.sport}
                                                onChange={handleCheckboxChange}
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                d="weight2" />
                                            <label className="form-check-label" htmlFor="weight2">
                                                Sport (#2)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="dk"
                                                checked={selectedWeightFilters.dk}
                                                onChange={handleCheckboxChange}
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="weight3" />
                                            <label className="form-check-label" htmlFor="weight3">
                                                DK (#3)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="aran"
                                                checked={selectedWeightFilters.aran}
                                                onChange={handleCheckboxChange}
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="weight4" />
                                            <label className="form-check-label" htmlFor="weight4">
                                                Aran (#4)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="worsted"
                                                checked={selectedWeightFilters.worsted}
                                                onChange={handleCheckboxChange}
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="weight4" />
                                            <label className="form-check-label" htmlFor="weight4">
                                                Worsted (#4)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="bulky"
                                                checked={selectedWeightFilters.bulky}
                                                onChange={handleCheckboxChange}
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="weight5" />
                                            <label className="form-check-label" htmlFor="weight5">
                                                Bulky (#5)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="superBulky"
                                                checked={selectedWeightFilters.superBulky}
                                                onChange={handleCheckboxChange}
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="weight6" />
                                            <label className="form-check-label" htmlFor="weight6">
                                                Super Bulky (#6)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="jumbo"
                                                checked={selectedWeightFilters.jumbo}
                                                onChange={handleCheckboxChange}
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="weight0" />
                                            <label className="form-check-label" htmlFor="weight0">
                                                Jumbo (#7)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Accordian with checkboxes for yarn type */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#yarnType"
                                        aria-expanded="false"
                                        aria-controls="yarnType">
                                        Type
                                    </button>
                                </h2>
                                <div
                                    id="yarnType"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="yarnType"
                                    data-bs-parent="#filters">
                                    <div className="accordion-body">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="typeAcr" />
                                            <label className="form-check-label" htmlFor="typeAcr">
                                                Acrylic
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="typeC" />
                                            <label className="form-check-label" htmlFor="typeC">
                                                Cotton
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="typeW" />
                                            <label className="form-check-label" htmlFor="typeW">
                                                Wool
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="typeS" />
                                            <label className="form-check-label" htmlFor="typeS">
                                                Silk
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="typeAlp" />
                                            <label className="form-check-label" htmlFor="typeAlp">
                                                Alpaca
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="typePoly" />
                                            <label className="form-check-label" htmlFor="typePoly">
                                                Polyester
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="typeBlnd" />
                                            <label className="form-check-label" htmlFor="typeBlnd">
                                                Blended
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
        </MainLayout>
    );
};

export default Yarn;




