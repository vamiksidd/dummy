import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
export default function Navbar() {
  const { user } = useContext(UserContext);
  const handleLogout = () => {
    user = null;
  };
  return (
    <div className="flex justify-between p-4">
      <div className="text-2xl md:text-3xl">
        <p>
          {user !== null ? (
            <span>Welcome , {user.username}</span>
          ) : (
            <span></span>
          )}
        </p>
      </div>
      <div className="text-md md:text-xl">
        <ul className="flex gap-1 ">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `block py-2 pr-3 pl-3 duration-200 
                 ${
                   isActive ? "text-orange-500" : "text-gray-400"
                 } hover:bg-[#C570FA] rounded-sm   hover:text-orange-700 `
              }
            >
              Home
            </NavLink>
          </li>{" "}
          <li>
            {user ? (
              <NavLink
                to={"/login"}
                onClick={handleLogout}
                className={({ isActive }) =>
                  `block py-2 pr-3 pl-3 duration-200 
                 ${
                   isActive ? "text-orange-500" : "text-gray-400"
                 } hover:bg-[#C570FA] rounded-sm   hover:text-orange-700 `
                }
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  `block py-2 pr-3 pl-3 duration-200 
                 ${
                   isActive ? "text-orange-500" : "text-gray-400"
                 } hover:bg-[#C570FA] rounded-sm   hover:text-orange-700 `
                }
              >
                Login
              </NavLink>
            )}
          </li>{" "}
          {!user ? (
            <li>
              <NavLink
                to={"/signup"}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 
                                      ${
                                        isActive
                                          ? "text-orange-500"
                                          : "text-gray-400"
                                      }  hover:bg-[#C570FA] rounded-sm  hover:text-orange-700`
                }
              >
                SignUp
              </NavLink>
            </li>
          ) : (
            <div className=""></div>
          )}
        </ul>
      </div>
    </div>
  );
}
