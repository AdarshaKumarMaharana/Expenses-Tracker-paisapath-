import { useState, useRef, useEffect, useContext } from "react";
import { LogOut, X, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";
import Sidebar from "./Sidebar.jsx";

const Menubar = ({ activeMenu }) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const { clearUser, user } = useContext(AppContext);
    const navigate = useNavigate();

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        if (showDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showDropdown]);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        setShowDropdown(false);
        navigate("/login");
    };

    return (
        <div className="flex card items-center justify-between h-20 border border-b border-gray-200/50 bg-gray-100 backdrop-blur-[2px] py-4 px-4 sm:px-7 sticky top-0 z-30"
        >
            {/* Left side - Menu button and title */}
            <div className="flex items-center gap-5">
                <button
                    className="block lg:hidden text-black hover:bg-gray-100 p-1 rounded transition-colors"
                    onClick={() => {
                        setOpenSideMenu(!openSideMenu);
                    }}
                >
                    {openSideMenu ? (
                        <X className="text-2xl" />
                    ) : (
                        <Menu className="text-2xl" />
                    )}
                </button>

                <div>
    <img
        src={assets.logo}
        alt="logo"
        className="h-30 w-40 select-none pointer-events-none"
        onContextMenu={(e) => e.preventDefault()} // Prevent right-click
        draggable={false} // Prevent drag-and-drop saving
    />
</div>

            </div>

            {/* Right side - Avatar dropdown */}
            <div className="relative group" ref={dropdownRef}>
<button
    onClick={toggleDropdown}
    className="relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden
    transition-all duration-300 focus:outline-none 
    focus:ring-offset-2 group border border-violet-800 "
>
    {/* Normal Image */}
    <img
        src={user?.profileImageUrl || assets.default_profile}
        alt="profile"
        className="absolute w-20 h-20 object-cover rounded-full m-auto
        transition-opacity duration-300 ease-in-out group-hover:opacity-0"
    />

    {/* Hover GIF with scale */}
    <img
        src={assets.default_profile}
        alt="hover profile"
        className="absolute w-20 h-20 object-cover rounded-full m-auto
        opacity-0 scale-95 transition-all duration-300 ease-in-out
        group-hover:opacity-100 group-hover:scale-105"
    />
</button>



                {/* Dropdown Menu */}
                {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                        <div className="px-4 py-3 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden">
                                    <img
                                        src={user?.profileImageUrl || assets.default_profile}
                                        alt="profile"
                                        className="w-15 h-15 rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        {user.fullName}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="py-1">
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700
                                hover:bg-gray-50 transition-colors duration-150"
                            >
                                <LogOut className="w-4 h-4 text-gray-500" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile side menu */}
            {openSideMenu && (
                <div className="fixed top-[73px] left-0 right-0 bg-white border-b border-gray-200 lg:hidden z-20">
                    <Sidebar activeMenu={activeMenu} />
                </div>
            )}
        </div>
    );
};

export default Menubar;
