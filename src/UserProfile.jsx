import React, { useContext } from "react";

import UserContext from "./UserContext";

function UserProfile() {
    const { isOnline, setIsOnline } = useContext(UserContext);

    const handleClick = () => {
        setIsOnline(!isOnline);
    }

  return (
    <>
      <p>User is {isOnline? "en ligne" : "hors ligne"}</p>

      <button onClick={handleClick}>click to change user status</button>
    </>
  );
}

export default UserProfile;