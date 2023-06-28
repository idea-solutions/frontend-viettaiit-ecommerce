// LAYOUT
import Footer from "./Footer";
import Header from "./Header";
// STYLES
import "./layout-client.scss";
function LayoutClient({ children }) {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default LayoutClient;
