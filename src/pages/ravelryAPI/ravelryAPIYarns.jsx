import { useEffect, useState } from "react";
const username = "read-30374bdbb4186ef30d28bc0f14b4e697";
const password = "1qg8ZJMG6aCJL5mf64gfV6X7kKEzvSu3L+Dvc47t";


const RavelryAPIYarns = ({ appliedWeightFilters, filtering }) => {
    const [yarns, setYarns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // const response = await fetch("http://127.0.0.1:8080/api/ravelry/yarns", {
    //     // Adding headers to the request
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //     }
    // })

    //fetch yarn data from api on mount
    useEffect(() => {
        //start with fetching all yarns
        const fetchYarns = async () => {
            try {
                const response = await fetch("https://api.ravelry.com/yarns/search.json?page_size=48", {
                    method: "GET",
                    headers: {
                        "Authorization": "Basic " + btoa(username + ":" + password)
                    }
                })
                //fetch detailed object for all yarns, searched for by id
                if (!response.ok) throw new Error("Failed to fetch yarns");
                const data = await response.json();
                console.log("data", data);
                const yarnIDs = data.yarns.map(yarn => yarn.id);
                const yarnDetails = await Promise.all(
                    yarnIDs.map(async (id) => {
                        const yarnDetailsResponse = await fetch(`https://api.ravelry.com/yarns/${id}.json`, {
                            method: "GET",
                            headers: {
                                "Authorization": "Basic " + btoa(username + ":" + password)
                            },
                        });
                        if (!yarnDetailsResponse.ok) throw new Error("Failed to fetch yarns");
                        return await yarnDetailsResponse.json();
                    }
                    )
                )
                setYarns(yarnDetails);
                console.log("details", yarnDetails);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchYarns();
    }, []);



    //show loading spinner
    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (error) {
        return <div className="alert alert-danger">Error: {error}</div>;
    }

    //tracks yarns currently in use
    let yarnsDisplayed;

    //remove yarns that don't match filters selected
    if (filtering) {
        //make copy of yarns and figure out which filters were checked 
        let yarnsDeepCopy = JSON.parse(JSON.stringify(yarns));
        let appliedWeightFiltersArr = [];
        //add each checked filter to the list of applied filters
        Object.entries(appliedWeightFilters).forEach(([key, value]) => {
            if (value == true) {
                appliedWeightFiltersArr.push(key.toLocaleLowerCase());
            }
        });
        //if the weight of the yarn matches a weight filter set in the array, keep, otherwise delete
        Object.entries(yarnsDeepCopy).forEach(([key, value]) => {
            if (!appliedWeightFiltersArr.includes(value.yarn.yarn_weight.name.toLocaleLowerCase())) {
                delete yarnsDeepCopy[key];
            }
        })
        //if true filters exist, copy contains filters
        if (!appliedWeightFiltersArr.length == 0) {
            yarnsDisplayed = yarnsDeepCopy;
        }
        //if not, yarns being displayed should be original yarn object
        else {
            yarnsDisplayed = yarns;
        }
    }
    //if not filtering, display all yarns
    else {
        yarnsDisplayed = yarns;
    }

    console.log(yarns);


    return (
        //card to display details of each yarn
        <div className="row ms-auto me-auto">
            {yarnsDisplayed.map((yarn) => (
                <div className="col-md-4 col-lg-3 d-flex justify-content-center" key={yarn.yarn.id}>
                    <div className="card m-3 flex-grow-1" onClick={() => window.open(`${yarn.yarn.yarn_company.url}`, "_blank")} style={{ cursor: "pointer" }}>
                        <div className="card-img-wrapper" style={{ height: '60%' }}>
                            {yarn.yarn?.photos?.[0]?.medium_url ? (
                                <img
                                    src={yarn.yarn.photos[0].medium_url}
                                    className="card-img-top"
                                    alt={yarn.yarn.name ? yarn.yarn.name : "Unnamed yarn"}
                                    style={{ objectFit: 'cover', height: '100%' }}
                                />
                            ) : (
                                <img
                                    src="/noBackgroundLogo.png"
                                    className="card-img-top"
                                    alt="No image available"
                                    style={{ objectFit: 'cover', height: '100%' }}
                                />
                            )}

                        </div>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{`${yarn.yarn.name ? yarn.yarn.name : "Unnamed yarn"}`}</h5>
                            <p className="card-text"><small className="text-body-secondary">{`${yarn.yarn.yarn_company.name ? yarn.yarn.yarn_company.name : "No named company"}`}</small></p>
                            <p className="card-text">{`Weight: ${yarn.yarn.yarn_weight?.name || "Unknown"}`}</p>
                            {yarn.yarn.yarn_fibers.map((aFiber) => (
                                <p className="card-text" key={aFiber.id}>{`${aFiber.percentage}% ${aFiber.fiber_type.name ? aFiber.fiber_type.name : "Unkown fiber type"}`}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RavelryAPIYarns;

