import SideBar from "../SideBar";
function Layout({ children }) {
  return (
    <div className="d-flex">
      <SideBar />
      {children}
    </div>
  );
}

export default Layout;
