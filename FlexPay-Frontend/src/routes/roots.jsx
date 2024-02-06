import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";



export default function Router() {

    // const BrowserRoutes = () => {
    //     return(
    //         <BrowserRouter>
    //             <Routes>
    //                 <Route path="/" element={<Home/>} />

    //                 <Route path="/" element={<SigninLayout />} />
    //                     <Route path="/signup" element={<Signup/>} />
                    
    //                 <Route path="*" element={<h1>Not Found</h1>} />
    //             </Routes>
    //         </BrowserRouter>

    //     )
    // }

    const BrowserRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/signup",
            element: <Signup/>
        },
        {
            path: "/login",
            element: <Login/>
        }
    ])

    return(
        <RouterProvider router={BrowserRoutes} />
    )
}