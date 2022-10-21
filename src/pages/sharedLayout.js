import NavMenu from "../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <>
      <NavMenu fixed="top" />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
