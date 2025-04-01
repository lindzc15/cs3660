import { useEffect, useState } from "react";
const username = "read-30374bdbb4186ef30d28bc0f14b4e697";
const password = "1qg8ZJMG6aCJL5mf64gfV6X7kKEzvSu3L+Dvc47t";


const RavelryAPIPatterns = () => {
    const [patterns, setPatterns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPatterns = async () => {
            try {
                const response = await fetch("https://api.ravelry.com/patterns/search.json", {
                    method: "GET",
                    headers: {
                        "Authorization": "Basic " + btoa(username + ":" + password)
                    }
                })
                if (!response.ok) throw new Error("Failed to fetch patterns");
                const data = await response.json();
                setPatterns(data.patterns);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchPatterns();
    }, []);

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


    return (
        //maybe display ratings with star icons; out of 5 rating given by yarn.rating_average
        <div className="row ms-auto me-auto">
            {patterns.map((pattern) => (
                <div className="col-md-4 col-lg-3 d-flex justify-content-center" key={pattern.id}>
                    <div className="card m-3 flex-grow-1" onClick={() => window.open(`${pattern.pattern_sources[1].url}`, "_blank")} style={{ cursor: "pointer" }}>
                        <div className="card-img-wrapper" style={{ height: '60%' }}>
                            {pattern.first_photo ? (
                                <img
                                    src={pattern.first_photo.medium_url}
                                    className="card-img-top"
                                    alt={pattern.name}
                                    style={{ objectFit: 'cover', height: '100%' }}
                                />
                            ) : (
                                <img
                                    src="../public/noBackgroundLogo.png"
                                    className="card-img-top align-text-center align-items-center mt-5"
                                    alt="No image available"
                                />
                            )}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{`${pattern.name}`}</h5>
                            <p className="card-text"><small className="text-body-secondary">{`${pattern.designer.name}`}</small></p>
                            {pattern.free && <div className="card-text">*Free Pattern*</div>}
                            {!pattern.free && <div className="card-text">*Pattern must be purchased*</div>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RavelryAPIPatterns;