import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  const hasSocialMediaLinks = true;

  return (
    <footer className="footer mt-auto py-3 bg-primary text-white">
      <div className="container  p-80">
        <div className="row w-100">
          <div className="col-12  col-md-3 p-4 p-lg-0">
            <Link href="#" className="text-white text-decoration-none">
              <h5 className="mb-3 cf-sub ">Software Recruitment co.</h5>
            </Link>

            {hasSocialMediaLinks && (
              <div className="d-flex justify-content-left mb-3 gap-3">
                <Link href="/" className="text-white text-decoration-none">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="font-a-icon1 hover-transition"
                  />
                </Link>
                <Link href="/" className="text-white text-decoration-none">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="font-a-icon1 hover-transition"
                  />
                </Link>
                <Link href="/" className="text-white text-decoration-none">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="font-a-icon1 hover-transition"
                  />
                </Link>
                <Link href="/" className="text-white text-decoration-none">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="font-a-icon1 hover-transition"
                  />
                </Link>
              </div>
            )}
          </div>

          <div
            className="col-12 col-md-3 p-4 p-lg-0  d-flex flex-column gap-title"
            key="link-col-1"
          >
            <h5 className="f-title m-0">Explore</h5>
            <ul className="list-unstyled d-flex flex-column gap-card">
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Homepage
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  For jobseekers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  For clients
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Our sectors
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="col-12  col-md-3 p-4 p-lg-0  d-flex flex-column gap-title"
            key="link-col-2"
          >
            <h5 className="f-title m-0">Sectors</h5>
            <ul className="list-unstyled  d-flex flex-column gap-card">
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Software engineering
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  DevOps
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Cloud
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Testing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="col-12  col-md-3 p-4 p-lg-0  d-flex flex-column gap-title "
            key="link-col-3"
          >
            <h5 className=" f-title m-0">Services</h5>
            <ul className="list-unstyled  d-flex flex-column gap-card">
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Nav item
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Nav item
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Nav item
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Nav item
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white text-decoration-none">
                  Nav item
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
