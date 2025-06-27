import {
    createBrowserRouter
  } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Errorpage from "../Pages/Error Page/Errorpage"; 
import Home from "../Pages/Home/Home";
import Pricing from "../Pages/Pricing/Pricing";
import Services from "../Pages/Services/Services";
import Coverage from "../Pages/Coverage/Coverage";
import About from "../Pages/About Us/About";
import Rider from "../Pages/Rider/Rider";


export const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      
      errorElement: <Errorpage></Errorpage>,

      children: [
        {
            index: true,
            Component: Home
        },
        {
          path: "pricing",
          Component: Pricing,
        },
        {
          path: "services",
          Component: Services,
        },
        {
          path: "coverage",
          Component: Coverage,
        },
        {
          path: "about",
          Component: About,
        },
        {
          path: "be-a-rider",
          Component: Rider,          
        }
      ]
    },
  ]);