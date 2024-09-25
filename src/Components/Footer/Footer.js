import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-items">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Brand Center</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div className="footer-items">
                    <h3>Help Center</h3>
                    <ul>
                        <li><a href="#">Discord Server</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>


                <div className="footer-items">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Licensing</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>


                <div className="footer-items">
                    <h3>Downloads</h3>
                    <ul>
                        <li><a href="#">iOS</a></li>
                        <li><a href="#">Android</a></li>
                        <li><a href="#">Windows</a></li>
                        <li><a href="#">MacOS</a></li>
                    </ul>
                </div>
            </div>

            <div className='copyright'>
                <div>@2024 Anmol Tuteja</div>
                <div className='social-icons'>
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><RiInstagramFill /></a>
                    <a href="https://x.com/Anmol_Tuteja_" target="_blank"><BsTwitterX /></a>
                    <a href="#"><FaDiscord /></a>
                    <a href="https://github.com/AnmolTutejaGitHub" target="_blank"> <FaGithub /></a>
                </div>
            </div>
        </div >
    );
}
export default Footer;