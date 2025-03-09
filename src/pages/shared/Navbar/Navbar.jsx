import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { MdBloodtype } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { logOut } = useContext(AuthContext);
  const user = localStorage.getItem("user_id");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" w-full  bg-red-500 shadow-lg text-white py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-semibold">
          <MdBloodtype className="text-white text-3xl mr-2" />
          <span>Blood Aid</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/create-events" onClick={() => setMenuOpen(false)}>
                  Create Event
                </Link>
              </li>
              <li>
                <Link to="/blood-request" onClick={() => setMenuOpen(false)}>
                  Blood Request
                </Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button
                  onClick={logOut}
                  className="hover:text-red-200 transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white text-black shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li>
              <Link
                to="/"
                className="hover:text-red-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    to="/create-events"
                    className="hover:text-red-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Create Event
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blood-request"
                    className="hover:text-red-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Blood Request
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="hover:text-red-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="hover:text-red-500 transition"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-red-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="hover:text-red-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
