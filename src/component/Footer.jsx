import { Link } from "react-router-dom";
import Logo from "../assets/images/forcythe_logo.svg"
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaPodcast } from "react-icons/fa6";
import "../styles/Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <div className="subscribe">
                    <div className="sub__box">
                        <input type="text" name="subscribe" />
                        <button>Subscribe</button>
                    </div>

                    <div className="agree">
                        <input type="radio" name="agree" />
                        <p>
                            I agree to receive other notifications from Forcythe
                        </p>
                    </div>
                </div>

                <div className="footer__forcythe">
                    <div className="footer__logo">
                        <img src={Logo} alt="forcythe__logo" />
                    </div>

                    <div className="footer__parag">
                        <p>
                            We are the growth company for businesses looking to scale. We are dedicated to transforming
                            businesses with bespoke digital solutions that drive growth.
                        </p>
                    </div>

                    <div className="forcythe__social">
                        <span className="logo__social">
                            <FaXTwitter />
                        </span>
                        <span className="logo__social">
                            <FaFacebookF />
                        </span>
                        <span className="logo__social">
                            <IoLogoInstagram />
                        </span>
                        <span className="logo__social">
                            <FaYoutube />

                        </span>
                        <span className="logo__social">
                            <FaPodcast />

                        </span>
                    </div>

                  
                </div>

                <div className="footer__links">
                        <h4>Company</h4>

                        <div className="footer_link">
                            <Link to="/">About</Link>
                            <Link to="/">Services</Link>
                            <Link to="/">Portfolio</Link>
                            <Link to="/">Studio</Link>
                            <Link to="/">Foundation</Link>
                            <Link to="/">Careers</Link>
                            <Link to="/">Blog</Link>
                        </div>



                </div>
            </div>
        </footer>
    )
}

export default Footer