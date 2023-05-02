import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ReadMore from "./pages/ReadMore";
import Blog from "./pages/Blog";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<Product />} />
            <Route path="Readmore" element={<ReadMore />} />
            <Route path="Blog" element={<Blog />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
