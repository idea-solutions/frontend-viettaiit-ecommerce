import NavbarCustom from "./NavbarCustom";
import SideBar from "./SideBar";

function LayOutAdmin({ children }) {
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

export default LayOutAdmin;
