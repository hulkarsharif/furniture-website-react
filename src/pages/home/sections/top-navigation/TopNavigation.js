import "./TopNavigation.css";
import logo from "../../../../images/logo-white.jpg";
export function TopNavigation() {
    return (
        <header>
            <nav className="navigation container">
                <img className="logo" src={logo} alt="Whiter logo" />
                <div className="navigation__links">
                    <ul>
                        <li>
                            <a href="">Products</a>
                        </li>
                        <li>
                            <a href="">Rooms</a>
                        </li>
                        <li>
                            <a href="">Inspiration</a>
                        </li>
                        <li>
                            <a href="">Support</a>
                        </li>
                    </ul>
                </div>

                <a className="navigation__action" href="">
                    Sign in
                </a>
            </nav>
            <img src="./images/menu 1.jpg" alt="" id="mobile-nav-icon" />
            <nav className="mobile-nav">
                <span className="close-icon">&times;</span>
            </nav>
        </header>
    );
}
