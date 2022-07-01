import { Link, BrowserRouter } from "react-router-dom";
import AppRoutery from "../Route/router";

function NavBar() {
    return (
        <BrowserRouter>
            <AppRoutery />
            <div>
                <Link to="/">home</Link>
                <Link to="contactus">contact us</Link>
                <Link to="aboutus">about us</Link>
            </div>
        </BrowserRouter>
    )
}
export default NavBar