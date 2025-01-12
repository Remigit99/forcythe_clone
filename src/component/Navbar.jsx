import { Link } from "react-router-dom"

import ForcytheLogo from "../assets/images/forcythe_logo.svg"
import CustomButton from "./CustomButton"
import "../styles/NavbarStyle.css"

const Navbar = () => {
  return (
    <nav>
<div className="container nav__container">
    <div className="nav__container-left">
        <Link to="/">
            <img src={ForcytheLogo} alt="Forcythe_Logo" />
        </Link>
    </div>

    <ul className="nav__links">
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/">Portfolio</Link>
        <Link to="/">Studio</Link>
        <Link to="/">Foundation</Link>
    </ul>
    <div className="nav__container-right">
        <CustomButton title="Book a Call"/>
    </div>
</div>
    </nav>
  )
}

export default Navbar