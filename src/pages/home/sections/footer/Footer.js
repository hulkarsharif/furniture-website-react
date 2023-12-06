import "./Footer.css";
import logo from "../../../../images/logo.svg.svg";

const contactLinks = [
    { text: "62 Orp St, Seattle, USA", link: "https://location.com" },
    { text: "sales@furnature.com", link: "" },
    { text: "+1 800726 915273" }
];

const roomLinks = [
    { text: "Living Room", link: "https://facebook.com" },
    { text: "Bed Room", link: "" },
    { text: "Office Room", link: "" }
];
const companyLinks = [
    { text: "About Us", link: "https://facebook.com" },
    { text: "Services", link: "" },
    { text: "Products", link: "" }
];

export function Footer() {
    return (
        <footer id="footer">
            <div className="footer container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <img src={logo} alt="Whiter logo" />
                        <p className="text-lg">
                            We make furniture with love and <br />
                            passions. No doubt, really.
                        </p>
                        <p className="text-lg">&copy; TuranTech Inc.</p>
                    </div>

                    <div className="footer__contact">
                        <h4 className="footer__heading uppercase-text-2">
                            CONTACT
                        </h4>
                        {contactLinks.map((link, idx) => {
                            return (
                                <a
                                    href={link.link}
                                    className="text-lg"
                                    key={idx}
                                >
                                    {link.text}
                                </a>
                            );
                        })}
                    </div>

                    <div className="footer__product">
                        <h4 className="footer__heading uppercase-text-2">
                            PRODUCT
                        </h4>
                        {roomLinks.map((link, idx) => {
                            return (
                                <a
                                    href={link.link}
                                    className="text-lg"
                                    key={idx}
                                >
                                    {link.text}
                                </a>
                            );
                        })}
                    </div>

                    <div className="footer__about-us">
                        <h4 className="footer__heading uppercase-text-2">
                            OUR COMPANY
                        </h4>
                        {companyLinks.map((link, idx) => {
                            return (
                                <a
                                    href={link.link}
                                    className="text-lg"
                                    key={idx}
                                >
                                    {link.text}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
