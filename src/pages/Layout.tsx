import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

function LayoutPage() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default LayoutPage;
