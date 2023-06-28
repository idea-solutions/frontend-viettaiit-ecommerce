import NavbarCustom from "../admin/NavbarCustom";
import SideBar from "../admin/SideBar";
function Layout({ children }) {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-100">
        <NavbarCustom />
        {children}
      </div>
    </div>
  );
}

export default Layout;
