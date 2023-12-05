import "./Footer.css";
import logo from "../../../../images/logo.svg.svg";

export function Footer() {
    return (
        <footer id="footer">
            <div class="footer container">
                <div class="footer__content">
                    <div class="footer__brand">
                        <img src={logo} alt="Whiter logo" />
                        <p class="text-lg">
                            We make furniture with love and <br />
                            passions. No doubt, really.
                        </p>
                        <p class="text-lg">&copy; TuranTech Inc.</p>
                    </div>

                    <div class="footer__contact">
                        <h4 class="footer__heading uppercase-text-2">
                            CONTACT
                        </h4>
                        <p class="text-lg">62 Orp St, Seattle, USA</p>
                        <a href="mailto: sales@furnatur.com" class="text-lg">
                            sales@furnatur.com
                        </a>
                        <a href="+1 800 726 915273" class="text-lg">
                            +1 800 726 915273
                        </a>
                    </div>

                    <div class="footer__product">
                        <h4 class="footer__heading uppercase-text-2">
                            PRODUCT
                        </h4>
                        <a href="" class="text-lg">
                            Living Room
                        </a>
                        <a href="" class="text-lg">
                            Bed Room
                        </a>
                        <a href="" class="text-lg">
                            Office Room
                        </a>
                    </div>

                    <div class="footer__about-us">
                        <h4 class="footer__heading uppercase-text-2">
                            OUR COMPANY
                        </h4>
                        <a href="" class="text-lg">
                            About us
                        </a>
                        <a href="" class="text-lg">
                            Services
                        </a>
                        <a href="" class="text-lg">
                            Products
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
