import { useRoutes } from "react-router-dom"
import Home from "../../Pages/Home/Home"
import ContactUs from "../../Pages/ContactUs/ContactUs"
import AboutUs from "../../Pages/AboutUs/AboutUs"

function AppRoutery() {
   return useRoutes([
        {
            path: "/", element: <Home />
        },
        {
            path: "contactus", element: <ContactUs />
        },
        {
            path: "aboutus", element: <AboutUs />
        }
    ])
}
export default AppRoutery