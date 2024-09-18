import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Corpo from "../pages/Corpo";
import Footer from "../pages/Footer";


const router = createBrowserRouter([
    {path: "/", element:<Home />},
    {path: "/contato", element:<Contato />},
    {path: "/corpo", element:<Corpo />},
    {path: "/footer", element:<Footer />}
])



export default router;