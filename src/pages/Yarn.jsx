import React from "react";
import MainLayout from "../layouts/MainLayout";

const YARN_IMAGES = {
    yarn1: "https://raw.githubusercontent.com/lindzc15/3660-project-images/main/yarn1.jpg",
    yarn2: "https://raw.githubusercontent.com/lindzc15/3660-project-images/main/yarn2.jpg",
    yarn3: "https://raw.githubusercontent.com/lindzc15/3660-project-images/main/yarn3.jpg",
    yarn4: "https://raw.githubusercontent.com/lindzc15/3660-project-images/main/yarn4.jpg",
    yarn5: "https://raw.githubusercontent.com/lindzc15/3660-project-images/main/yarn5.jpg",
    yarn6: "https://raw.githubusercontent.com/lindzc15/3660-project-images/main/yarn6.jpg",
    yarn7: "https://raw.githubusercontent.com/lindzc15/3660-project-images/main/yarn7.jpg",
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

const Yarn = () => {
    return (
        <MainLayout title="Yarn">
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
                    {Object.keys(YARN_IMAGES).map((key) => (
                        <div className="card m-4" style={{ width: '20rem', cursor: "pointer" }} key={key}>
                            <img src={YARN_IMAGES[key]} className="card-img-top mt-2" alt={key} />
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
                            {/* Accordian with checkboxes for yarn weight */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#yarnWeight" aria-expanded="false" aria-controls="yarnWeight">
                                        Weight
                                    </button>
                                </h2>
                                <div id="yarnWeight" className="accordion-collapse collapse" aria-labelledby="yarnWeight" data-bs-parent="#filters">
                                    <div className="accordion-body">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="weight0" />
                                            <label className="form-check-label" htmlFor="weight0">
                                                Lace (#1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="weight1" />
                                            <label className="form-check-label" htmlFor="weight1">
                                                Fingering (#1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="weight2" />
                                            <label className="form-check-label" htmlFor="weight2">
                                                Sport (#2)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="weight3" />
                                            <label className="form-check-label" htmlFor="weight3">
                                                DK (#3)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="weight4" />
                                            <label className="form-check-label" htmlFor="weight4">
                                                Worsted (#4)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="weight5" />
                                            <label className="form-check-label" htmlFor="weight5">
                                                Chunky (#5)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="weight6" />
                                            <label className="form-check-label" htmlFor="weight6">
                                                Super Chunky (#6)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="weight7" />
                                            <label className="form-check-label" htmlFor="weight7">
                                                Ultra (#7)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Accordian with checkboxes for yarn color */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#yarnColor" aria-expanded="false" aria-controls="yarnColor">
                                        Color
                                    </button>
                                </h2>
                                <div id="yarnColor" className="accordion-collapse collapse" aria-labelledby="yarnColor" data-bs-parent="#filters">
                                    <div className="accordion-body">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="colorR" />
                                            <label className="form-check-label" htmlFor="colorR">
                                                Red
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="colorO" />
                                            <label className="form-check-label" htmlFor="colorO">
                                                Orange
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="colorY" />
                                            <label className="form-check-label" htmlFor="colorY">
                                                Yellow
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="colorG" />
                                            <label className="form-check-label" htmlFor="colorG">
                                                Green
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="colorB" />
                                            <label className="form-check-label" htmlFor="colorB">
                                                Blue
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="colorP" />
                                            <label className="form-check-label" htmlFor="colorP">
                                                Purple
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="colorBrwn" />
                                            <label className="form-check-label" htmlFor="colorBrwn">
                                                Brown
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="colorGray" />
                                            <label className="form-check-label" htmlFor="colorGray">
                                                Gray
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="colorBlk" />
                                            <label className="form-check-label" htmlFor="colorBlk">
                                                Black
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="colorW" />
                                            <label className="form-check-label" htmlFor="colorW">
                                                White
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="colorM" />
                                            <label className="form-check-label" htmlFor="colorM">
                                                Multi-color
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Accordian with checkboxes for yarn type */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#yarnType" aria-expanded="false" aria-controls="yarnType">
                                        Type
                                    </button>
                                </h2>
                                <div id="yarnType" className="accordion-collapse collapse" aria-labelledby="yarnType" data-bs-parent="#filters">
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
                <SetFilterBttn />
            </div>
        </MainLayout>
    );
};

export default Yarn;