import { createContext, useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);
// const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const logOut = () => {
    const token = localStorage.getItem("authToken");
    fetch("https://blood-aid-backend.vercel.app/account/logout/", {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.removeItem("authToken");
        localStorage.removeItem("user_id");
        localStorage.removeItem("username");
        localStorage.removeItem("donor_id");
        toast.success("Login successful");
        window.location.reload();
      });
  };

  const authInfo = {
    user,
    setUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
