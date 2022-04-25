import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


function LogoutButton() {

  const [data, setData] = useState(null);
  const logOut = () => {
    axios({
      method: "DELETE",
      withCredentials: true,
      url: "http://localhost:4000/users/logout",
    });
    setData(null);
  };
  

  return (
    <button type="button" className="logout" onClick={logOut}>
      <Link to="/login"><img
                  src="../../Images/logout.png"
                  alt="readMore"
                  className="readMore"
                />Logout</Link>
    </button>
  );
}

export default LogoutButton;
