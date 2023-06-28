import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { adminRoutes } from "./routes";
import LayoutAdmin from "./layout/LayoutAdmin";
import { AnimatePresence } from "framer-motion";
function App() {
  const admin = true;
  return (
    <div className="App">
      <Router>
        <AnimatePresence onExitComplete={true}>
          <Routes>
            {[...adminRoutes].map((route, idx) => {
              let Comp;
              let path;
              if (admin) {
                Comp = <LayoutAdmin>{route.com}</LayoutAdmin>;
                path = route.path;
              }
              if (path === "*") {
                Comp = route.com;
              }
              return <Route key={idx} element={Comp} path={path} />;
            })}
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
