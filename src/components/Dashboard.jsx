import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>
        This is dashboard of :{" "}
        <span className="text-red-500 font-semibold">{user.email}</span>
      </h2>
    </div>
  );
};

export default Dashboard;
