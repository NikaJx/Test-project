interface IButton {
    title: string;
    onClick?: () => void;
    bgColor: string;
}

import "./button.css";

const Button: React.FC<IButton> = ({ title, onClick, bgColor }) => {
    return (
        <button className={`contact-btn ${bgColor}`} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;
