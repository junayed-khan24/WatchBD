import { createBrowserRouter } from "react-router";
import Home from "../Component/Home";
import ProductDetails from "../Component/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
    }
]);

export default router;