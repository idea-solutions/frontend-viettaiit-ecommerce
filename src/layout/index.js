// LAYOUT
import Footer from "./Footer";
import Header from "./Header";
// STYLES
function Layout({ children }) {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
