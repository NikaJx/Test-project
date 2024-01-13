import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import DropdownMenu from "../dropdonw-menu/DropdownMenu";

import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav_wrapper">
                <div className="nav_left">PhotOgenic</div>

                <div className="nav_mid">
                    <ul>
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <Link href={"/services"}>Services</Link>
                        </li>
                        <DropdownMenu />

                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav_right">
                    <CiSearch size={20} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
