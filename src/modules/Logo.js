import { Link, useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import logo from "../images/logo.png";

const Logo = () => {
    const location = useLocation();

    return (
        <>
        {!isMobile && location.pathname !== "/" && <Link to="/" className="logo my-2">
            <img src={logo} alt="jy logo" />
        </Link>}
        </>
    )
}

export default Logo;