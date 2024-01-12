import "./progress-bar.css";

const ProgressBar = () => {
    return (
        <>
            <div className="service-info-progres">
                <h6 className="progress-title progress-title-1">
                    Photography <span>80%</span>{" "}
                </h6>
                <div className="progress">
                    <div
                        className="progress-bar gradient-1"
                        style={{ width: "80%" }}
                    ></div>
                </div>
            </div>
            <div className="service-info-progres">
                <h6 className="progress-title progress-title-2">
                    Creativity <span>90%</span>{" "}
                </h6>
                <div className="progress">
                    <div
                        className="progress-bar gradient-2"
                        style={{ width: "90%" }}
                    ></div>
                </div>
            </div>
            <div className="service-info-progres">
                <h6 className="progress-title progress-title-3">
                    Retouching <span>60%</span>{" "}
                </h6>
                <div className="progress">
                    <div
                        className="progress-bar gradient-3"
                        style={{ width: "60%" }}
                    ></div>
                </div>
            </div>
            <div className="service-info-progres">
                <h6 className="progress-title progress-title-4">
                    New Stills <span>85%</span>{" "}
                </h6>
                <div className="progress">
                    <div
                        className="progress-bar gradient-4"
                        style={{ width: "85%" }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default ProgressBar;
