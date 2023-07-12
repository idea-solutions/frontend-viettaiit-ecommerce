// LAYOUT
import Footer from "./Footer";
import Header from "./Header";
// STYLES
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
