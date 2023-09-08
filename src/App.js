import { Route, Routes } from "react-router-dom";
import { clientPages } from "./routes";
import Layout from "./layout";
import NotFound from "./pages/notFound";
import { Suspense, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { getUser } from "./features/auth/authSlice";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div className="App">
      <Suspense fallback={<div>Waiting...</div>}>
        <Routes>
          {clientPages.map((route, idx) => {
            let Comp;
            Comp = (
              <Layout>
                <AnimatePresence initial={false} mode="wait">
                  {route.com}
                </AnimatePresence>
              </Layout>
            );
            if (route.path === "*") {
              Comp = <NotFound></NotFound>;
            }
            return <Route key={idx} element={Comp} path={route.path} />;
          })}
        </Routes>
      </Suspense>
      <ToastContainer position="top-center" />
    </div>
  );
}

// chua login => Xem duoc client
// login - admin => Xem duoc client , admin
// login - client => Xem duoc client
export default App;
