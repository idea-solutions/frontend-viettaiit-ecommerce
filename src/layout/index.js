// LAYOUT
import Footer from "./Footer";
import Header from "./Header";
import PropTypes from "prop-types";

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

Layout.propTypes = {
  children: PropTypes.node,
};
