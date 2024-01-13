"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropdownMenu = () => {
    const [showDrop, setShowDrop] = useState<boolean>(false);

    return (
        <li onClick={() => setShowDrop(!showDrop)}>
            <div className="drop-li">
                <a href="#">Pages</a>
                <FaChevronDown
                    onClick={() => setShowDrop(!showDrop)}
                    className="drop-icon"
                />
            </div>
            <div className={`dropdown ${showDrop ? "show" : ""}`}>
                <a href="#">Blog Posts</a>
                <a href="#">Blog Single</a>
                <a href="#">404 Page</a>
            </div>
        </li>
    );
};

export default DropdownMenu;
