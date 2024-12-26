import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { DefaultRoute, pageRoutes } from "./config";
import { isLoggedIn } from "../utils";

function FinalRoute({ route }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!route.public && !isLoggedIn()) {
      navigate("/login");
    }
    if (isLoggedIn() && route.path == "/login") {
      navigate("/blog");
    }
  }, []);

  return (
    <Suspense fallback={<></>}>
      <route.component />
    </Suspense>
  );
}

function Router() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <Routes>
        <Route path="/" element={<Navigate to={DefaultRoute} />} />
        {pageRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<FinalRoute route={route} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
