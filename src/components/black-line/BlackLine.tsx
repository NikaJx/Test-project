import Button from "../button/Button";
import "./BlackLine.css";

const BlackLine = () => {
    return (
        <section className="black_line">
            <div>
                <h2>Looking for</h2>
                <p>Quality Photography?</p>

                <Button title="Contact Us" bgColor="outlined_btn_black" />
            </div>
        </section>
    );
};

export default BlackLine;
