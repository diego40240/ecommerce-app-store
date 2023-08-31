import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/dresses" element={<h1>dresses</h1>} />
      <Route path="/jackets" element={<h1>jackets</h1>} />
      <Route path="/jeans" element={<h1>jeans</h1>} />
      <Route path="/shoese" element={<h1>shoese</h1>} />
      <Route path="/cart" element={<h1>cart</h1>} />
      <Route path="/alerta" element={<h1>alerta</h1>} />
      <Route path="/perfil" element={<h1>perfil</h1>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      <RouterProvider router={route} />
    </QueryClientProvider>
  </React.StrictMode>
);
