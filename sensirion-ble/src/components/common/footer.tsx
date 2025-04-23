import "./footer.css";
import {GithubIcon} from "../vectors/githubIcon.tsx";

const FooterBar = () => {
    return (
        <div className="footer">
            <div className="footer__copyright">
                © Sensirion AG, 2025
            </div>
            <a href="https://github.com/Sensirion/ble-services" className="footer__link_to_repo"><GithubIcon className="footer__link_to_repo__logo"/></a>
        </div>
    );
};

export default FooterBar;
