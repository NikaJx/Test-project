"use client";

import { useState } from "react";

interface IProps {
    item: IQuestion;
}

import { FaAngleUp } from "react-icons/fa6";
import { IQuestion } from "./Faq";

const SingleFaq: React.FC<IProps> = ({ item }) => {
    const [showInfo, setShowInfo] = useState<boolean>(false);

    return (
        <div className="faq_single">
            <div className="faq_question">
                <h2>{item.title}</h2>
                <button
                    onClick={() => setShowInfo(!showInfo)}
                    className={`${showInfo && "faq_down"}`}
                >
                    <FaAngleUp />
                </button>
            </div>
            {showInfo && <p className="faq_answer">{item.info}</p>}
        </div>
    );
};

export default SingleFaq;
