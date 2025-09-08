import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { User } from "lucide-react";
import { SIDE_BAR_DATA } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activeMenu }) => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-gray-200/50 p-5 sticky top-[61px] z-20">
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
        <div className="flex items-center justify-center w-30 h-30 rounded-full border-1 border-purple-800 overflow-hidden">
          {user?.profileImageUrl ? (
            <img
              src={user.profileImageUrl}
              alt="profile"
              className="w-55 h-55 rounded-full object-cover"
            />
          ) : (
            <User className="w-55 h-55 text-purple-800" />
          )}
        </div>
        <h5 className="text-gray-950 font-medium text-lg leading-6">{user.fullName || ""}</h5>
        <h5 className="text-gray-500 text-md leading-4">{user.email || ""}</h5>
      </div>

      {SIDE_BAR_DATA.map((item, index) => (
        <button
          onClick={() => navigate(item.path)}
          key={`menu_${index}`}
          className={`cursor-pointer w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 ${
            activeMenu === item.label ? "text-white bg-purple-800" : ""
          }`}
        >
          <item.icon className="text-xl" />
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
