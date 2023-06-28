import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { privateRoutes } from "./routes";
import Layout from "./components/Layout";
import { AnimatePresence } from "framer-motion";
function App() {
  const admin = true;
  return (
    <div className="App">
      <Router>
        <AnimatePresence onExitComplete={true}>
          <Routes>
            {[...privateRoutes].map((route, idx) => {
              let Comp;
              let path;
              if (admin) {
                Comp = <Layout>{route.com}</Layout>;
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
