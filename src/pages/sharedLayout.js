import NavMenu from "../components/navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavMenu fixed="top" />
      <Outlet />
    </>
  );
};

export default Layout;
