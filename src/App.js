import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { clientPages } from "./routes";
import { AnimatePresence } from "framer-motion";
import Layout from "./layout";
import NotFound from "./pages/notFound";
import { Suspense } from "react";
function App() {
  return (
    <div className="App">
      <Router>
        <AnimatePresence>
          <Suspense fallback={<div>Waiting...</div>}>
            <Routes>
              {clientPages.map((route, idx) => {
                let Comp;
                Comp = <Layout>{route.com}</Layout>;
                if (route.path === "*") {
                  Comp = <NotFound></NotFound>;
                }
                return <Route key={idx} element={Comp} path={route.path} />;
              })}
            </Routes>
          </Suspense>
        </AnimatePresence>
      </Router>
    </div>
  );
}

// chua login => Xem duoc client
// login - admin => Xem duoc client , admin
// login - client => Xem duoc client

export default App;
