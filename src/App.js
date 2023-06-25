import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { privateRoutes } from "./routes";
import Layout from "./components/Layout";
import NotFound from "./pages/notFound";
function App() {
  const admin = true;
  return (
    <div className="App">
      <Router>
        <Routes>
          {[...privateRoutes].map((route, idx) => {
            let Comp;
            let path;
            if (admin) {
              Comp = <Layout>{route.com}</Layout>;
              path = route.path;
            } else {
              Comp = <NotFound />;
              path = "/admin/not-found";
            }
            return <Route key={idx} element={Comp} path={path} />;
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
