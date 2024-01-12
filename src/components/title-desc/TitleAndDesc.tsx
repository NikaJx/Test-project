interface ITitleDesc {
    title: string;
    desc: string;
}

import "./title-desc.css";

const TitleAndDesc: React.FC<ITitleDesc> = ({ desc, title }) => {
    return (
        <>
            <h2 className="contact-title">{title}</h2>
            <p className="contact-desc">{desc}</p>
        </>
    );
};

export default TitleAndDesc;
