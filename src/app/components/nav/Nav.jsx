import React from "react";
import Link from "next/link";
import "./style.scss";
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0  gap-1 gap-xl-2 gap-xl-5 cf-base">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle cf-base1"
                href="#"
                id="navbarDropdown1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                For JobSeekers
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li>
                  <Link
                    href="/jobseeker-submenu-1"
                    className="dropdown-item cf-base1"
                  >
                    Submenu Item 1
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle cf-base1"
                href="#"
                id="navbarDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                For Clients
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li>
                  <Link
                    href="/clients-submenu-1"
                    className="dropdown-item cf-base1"
                  >
                    Submenu Item 1
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle cf-base1"
                href="#"
                id="navbarDropdown1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sectors
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li>
                  <Link
                    href="/dropdown-item-1"
                    className="dropdown-item cf-base1"
                  >
                    Dropdown Item 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dropdown-item-2"
                    className="dropdown-item cf-base1"
                  >
                    Dropdown Item 2
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dropdown-item-3"
                    className="dropdown-item cf-base1"
                  >
                    Dropdown Item 3
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle cf-base1"
                href="#"
                id="navbarDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li>
                  <Link
                    href="/resources-submenu-1"
                    className="dropdown-item cf-base1"
                  >
                    Submenu Item 1
                  </Link>
                </li>
              </ul>
            </li>
            <li className="d-block d-lg-none mb-4 mt-2">
              <Link
                href="/"
                className="border-0 br-30 bg-secondary px-3 py-2 cf-base-bold text-darkbrown "
              >
                Upload CV
              </Link>
            </li>
            <li className="d-block d-lg-none">
              <Link
                href="/contact"
                className="border-0 br-30 bg-third px-3 py-2 cf-base-bold text-darkbrown "
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
