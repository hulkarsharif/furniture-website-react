import "./TopNavigation.css";
import logo from "../../../../images/logo-white.jpg";

const links = [
    { text: "Products", link: "https://google.com" },
    { text: "Rooms", link: "https://facebook.com" },
    { text: "Inspiration", link: "" },
    { text: "Support", link: "" }
];
export function TopNavigation() {
    return (
        <header>
            <nav className="navigation container">
                <img className="logo" src={logo} alt="Whiter logo" />
                <div className="navigation__links">
                    <ul>
                        {links.map((link, idx) => {
                            return (
                                <li key={idx}>
                                    <a href={link.link}>{link.text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <a className="navigation__action" href="">
                    Sign in
                </a>
            </nav>
            <img src="./images/menu 1.jpg" alt="" id="mobile-nav-icon" />
            <nav className="mobile-nav">
                <span className="close-icon">&times;</span>
                {links.map((link, idx) => {
                    return (
                        <li key={idx}>
                            <a href={link.link}>{link.text}</a>
                        </li>
                    );
                })}
            </nav>
        </header>
    );
}
