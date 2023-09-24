import { NavLink } from "react-router-dom";
import Logo from "../Logo";

const Navbar = () => {
    return (
        <div className="shadow-lg">
            <nav className="flex justify-between items-center p-4">
                <Logo></Logo>
                <ul className="flex gap-8">
                    <li className="text-black text-base font-bold">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#7E90FE]" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="text-black text-base font-bold">
                        <NavLink
                            to="/favorites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#7E90FE]" : ""
                            }
                        >
                            Favorites
                        </NavLink>
                    </li>
                    <li className="text-black text-base font-bold">
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#7E90FE]" : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;