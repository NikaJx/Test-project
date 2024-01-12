import Link from "next/link";
import { CiSearch } from "react-icons/ci";

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
                        <li>
                            {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Blog Posts</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Blog Single</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">404 Page</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">
                    Email Template
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-5">Landing Page</Dropdown.Item>
                  <Dropdown.Item href="#/action-6">Shortcodes</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
                        </li>
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
