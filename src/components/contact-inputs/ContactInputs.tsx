import Button from "../button/Button";
import "./contact-inputs.css";

const ContactInputs = () => {
    return (
        <form>
            <div className="contact-inputs">
                <input type="text" placeholder="Your Name*" />
                <input type="text" placeholder="Your Email*" />
                <input type="text" placeholder="Subject*" />
                <input type="text" placeholder="Website URL*" />
            </div>
            <div className="contact-text-area">
                <textarea placeholder="Type your message here*"></textarea>
            </div>
            <Button title="Send Message" bgColor="bg-pink" />
        </form>
    );
};

export default ContactInputs;
