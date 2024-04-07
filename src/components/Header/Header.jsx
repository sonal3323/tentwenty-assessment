import React, { useState } from "react";
import "./Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const menuLinks = [
  {
    title: "About",
    link: "/"
  },
  {
    title: "News",
    link: "/"
  },
  {
    title: "Services",
    link: "/"
  },
  {
    title: "Our Team",
    link: "/"
  },
  {
    title: "Make Enquiry",
    link: "/"
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <div className="header">
      <div className="header-content">
        <div className="header-content__left">
          <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
            <ul className="nav__list">
              {menuLinks.map((item, index) => (
                <li key={index} className="nav__list-item">
                  <a href={item.link} className="nav__item">{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header-content__right">
          <div className="nav-link">
            <a href="/" className="nav-link__wrap">
              <span className="link-title">Contact us</span>
              <BsArrowRight />
            </a>
          </div>
          <button className="header-content__toggler" onClick={menuToggler}>
            {!menuOpen ? <RxHamburgerMenu /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
