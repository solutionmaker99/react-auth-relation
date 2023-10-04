import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
  return (
    <div className="mx-32">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
