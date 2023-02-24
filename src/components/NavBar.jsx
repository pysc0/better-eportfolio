import "./Components.css";

import Logo from "../assets/fav.ico";
import { useEffect, useRef } from "react";

function Navbar() {
  const navEl = useRef();

  let lastScrollY = window.scrollY;
  function navHideFunc() {
    lastScrollY < window.scrollY
      ? navEl.current.classList.add("nav--hidden")
      : navEl.current.classList.remove("nav--hidden");
    lastScrollY = window.scrollY;
  }

  useEffect(() => {
    window.addEventListener("scroll", navHideFunc);

    return () => {
      window.removeEventListener("scroll", navHideFunc);
    };
  }, []);

  return (
    <nav className="navbar" ref={navEl}>
      <div className="navbar__container">
        <div className="nav__half nav__left">
          <img src={Logo} className="nav__logo hover" />
        </div>
        <div className="nav__half nav__right">
          <ul className="nav__list">
            <a href="#aboutme">
              <li className="nav__item hover">
                <span className="ni__number">01.</span>About
              </li>
            </a>
            <a href="#projects">
              <li className="nav__item hover">
                <span className="ni__number">02.</span>Work
              </li>
            </a>

            <a href="#contactMe">
              <li className="nav__item hover">
                <span className="ni__number">03.</span>Contact
              </li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
