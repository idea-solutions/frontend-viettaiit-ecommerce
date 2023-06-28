import NavbarCustom from "../NavbarCustom";
import SideBar from "../SideBar";
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
