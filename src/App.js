import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { adminPages, clientPages } from "./routes";
import LayoutAdmin from "./layout/LayoutAdmin";
import { AnimatePresence } from "framer-motion";
import LayoutClient from "./layout/LayoutClient";
import NotFound from "./pages/notFound";
function App() {
  const rule = "client";
  const combinationPages = rule === "admin" ? adminPages : clientPages;
  return (
    <div className="App">
      <Router>
        <AnimatePresence onExitComplete={true}>
          <Routes>
            {combinationPages.map((route, idx) => {
              let Comp;
              if (rule === "admin") {
                Comp = <LayoutAdmin>{route.com}</LayoutAdmin>;
                if (route.path === "*") {
                  Comp = <NotFound></NotFound>;
                }
              } else if (rule === "client") {
                Comp = <LayoutClient>{route.com}</LayoutClient>;
                if (route.path === "*") {
                  Comp = <NotFound></NotFound>;
                }
              }
              return <Route key={idx} element={Comp} path={route.path} />;
            })}
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

// chua login => Xem duoc client
// login - admin => Xem duoc client , admin
// login - client => Xem duoc client

export default App;
