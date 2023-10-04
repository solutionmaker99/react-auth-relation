import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user);
  return (
    <div>
      <h2>
        This Profile Page of :{" "}
        <span className="text-red-500 font-semibold">{user.email}</span>
      </h2>
    </div>
  );
};

export default Profile;
