import { FaEarthAfrica } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";

import ContactInputs from "@/components/contact-inputs/ContactInputs";
import TitleAndDesc from "@/components/title-desc/TitleAndDesc";

import "../../styles/contact.css";

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="contact-heading">
                    <TitleAndDesc
                        title="Contact Us"
                        desc="Nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat sunt in culpa qui official."
                    />
                </div>

                <div className="contact-details">
                    <div className="contact-item">
                        <div className="contact-left">
                            <h2>Contact Details</h2>
                            <div className="contact-item-det">
                                <div className="contact-info">
                                    <div className="contact-icon-item">
                                        <span>
                                            <FaEarthAfrica color="#fd5c63" />
                                        </span>
                                    </div>
                                    <div className="contact-text-item">
                                        <h6>Company Address</h6>
                                        <p>
                                            10001, 5th Avenue, 12202 street,
                                            USA.
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-info">
                                    <div className="contact-icon-item">
                                        <span>
                                            <BsFillTelephoneFill color="#fd5c63" />
                                        </span>
                                    </div>
                                    <div className="contact-text-item">
                                        <h6>Call Us</h6>
                                        <p>
                                            <a href="#">+1(21) 112 7368</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-info">
                                    <div className="contact-icon-item">
                                        <span>
                                            <MdEmail color="#fd5c63" />
                                        </span>
                                    </div>
                                    <div className="contact-text-item">
                                        <h6>Email Us</h6>
                                        <p>
                                            <a href="#">example@mail.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-info">
                                    <div className="contact-icon-item">
                                        <span>
                                            <FaHeadphones color="#fd5c63" />
                                        </span>
                                    </div>
                                    <div className="contact-text-item">
                                        <h6>Customer Support</h6>
                                        <p>
                                            <a href="#">info@support.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-right">
                            <ContactInputs />
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11897.039226173387!2d44.8484124!3d41.8011633!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sge!4v1704999465014!5m2!1sen!2sge"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
};

export default Contact;
