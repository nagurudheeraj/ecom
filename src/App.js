import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Header from "./Components/Header"
import Body from "./Components/Body/Index"
import Footer from "./Components/Footer/Index";
import ProductPage from "./Components/Pages/ProductPage";
import Cart from "./Components/Pages/Cart";
import Registration from "./Components/Pages/Registration";
import LoginRouting from "./Components/Utils/LoginRouting";
import CategoryPage from "./Components/Pages/CategoryPage";

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Body />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<LoginRouting />} />
      <Route path="registration" element={<Registration />} />
      <Route path="product/category/:id" element={<CategoryPage />} />
      <Route path="product/:id" element={<ProductPage />} />

    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
