import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import DropdownMenu from "../dropdonw-menu/DropdownMenu";

import "./navbar.css";

interface INavLinks {
    title: string;
    href: string;
}

const navLinks: INavLinks[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "#",
    },
    {
        title: "Services",
        href: "/services",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav_wrapper">
                <div className="nav_left">PhotOgenic</div>

                <div className="nav_mid">
                    <ul>
                        {navLinks.map((item, i) => (
                            <li key={i}>
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}

                        <DropdownMenu />
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
