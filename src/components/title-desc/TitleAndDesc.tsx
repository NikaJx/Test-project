interface ITitleDesc {
    title: string;
    desc: string;
}

import "./title-desc.css";

const TitleAndDesc: React.FC<ITitleDesc> = ({ desc, title }) => {
    return (
        <div className="contact-heading ">
            <h2 className="contact-title">{title}</h2>
            <p className="contact-desc">{desc}</p>
        </div>
    );
};

export default TitleAndDesc;
