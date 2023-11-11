import React from "react";
import {createHashRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Breakfast from "./Pages/Breakfast/Breakfast";
import Lunch from "./Pages/Lunch/Lunch";
import Dinner from "./Pages/Dinner/Dinner";
import Snacks from "./Pages/Snacks/Snacks";
import AboutUs from "./Pages/AboutUs/AboutUs";
import WorkOut from "./Pages/WorkOut/WorkOut";
import Goal from "./Pages/SignupSteps/Goal/Goal";
import Calories from "./Pages/SignupSteps/Calories/Calories";
import Activity from "./Pages/SignupSteps/Activity/Activity";
import Foods from "./Pages/SignupSteps/Foods/Foods";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Details from "./Pages/Details/Details";
import Profile from "./Pages/Profile/Profile";
import ShoppingCard from "./Pages/ShoppingCard/ShoppingCard";
import Payment from "./Pages/Payment/Payment";
import NotFound from "./Components/NotFound/NotFound";

function App() {
 
 let routers = createHashRouter([
        { path: "/", element: <Login /> },
        { path: "/home", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/aboutus", element: <AboutUs /> },
        { path: "/contactus", element: <ContactUs /> },
        { path: "/breakfast", element: <Breakfast /> },
        { path: "/lunch", element: <Lunch /> },
        { path: "/dinner", element: <Dinner /> },
        { path: "/snacks", element: <Snacks /> },
        { path: "/workout", element: <WorkOut /> },
        { path: "/goal", element: <Goal /> },
        { path: "/calories", element: <Calories /> },
        { path: "/activity", element: <Activity /> },
        { path: "/foods", element: <Foods /> },
        { path: "/details", element: <Details /> },
        { path: "/profile", element: <Profile /> },
        { path: "/shoppingcart", element: <ShoppingCard /> },
        { path: "/payment", element: <Payment /> },
        { path: "*", element: <NotFound /> }
    
  ]);



  return (
   
    
    <RouterProvider router={routers}></RouterProvider>
  
  );
}

export default App;
