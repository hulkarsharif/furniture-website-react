import React from "react";
import "./TopNavigation.css";
import logo from "../../../../images/logo-white.jpg";
import burgerIcon from "../../../../images/menu 1.jpg";

const links = [
    { text: "Products", link: "https://google.com" },
    { text: "Rooms", link: "https://facebook.com" },
    { text: "Inspiration", link: "" },
    { text: "Support", link: "" }
];
export class TopNavigation extends React.Component {
    state = {
        showMenu: false
    };
    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        });
    };
    openMenu = () => {
        this.setState({
            showMenu: true
        });
    };
    closeMenu = () => {
        this.setState({
            showMenu: false
        });
    };

    render() {
        const menuClass = this.state.showMenu ? "show" : "";

        return (
            <header>
                <nav className="navigation container">
                    <img className="logo" src={logo} alt="Whiter logo" />
                    <div className="navigation__links">
                        <ul>
                            {links.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.link}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <a className="navigation__action" href="">
                        Sign in
                    </a>
                </nav>
                <img
                    onClick={this.toggleMenu}
                    src={burgerIcon}
                    alt=""
                    id="mobile-nav-icon"
                />
                {this.state.showMenu && (
                    <nav className={`mobile-nav`}>
                        <img
                            className="mobile-nav-logo"
                            src={logo}
                            alt="Whiter logo"
                        />
                        <span className="close-icon" onClick={this.closeMenu}>
                            &times;
                        </span>
                        <ul>
                            {links.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.link}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </header>
        );
    }
}

export default TopNavigation;
