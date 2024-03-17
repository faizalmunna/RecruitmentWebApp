"use client";
import React, { useState, useEffect } from "react";
import "./style.scss";
import Navigation from "../nav/Nav";
import Link from "next/link";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div
        className={`d-flex d-lg-none bg-white ${
          isOpen === true ? "mobile_nav p-4" : ""
        }`}
      >
        {isOpen ? (
          <div className={` ${isOpen ? "slide-in-box" : "slide-out-box"}`}>
            <Navigation />
          </div>
        ) : (
          <div className={`${isOpen ? "slide-in-box" : "slide-out-box"}`}></div>
        )}
      </div>
      <div className="header bg-white container position-fixed p-2 p-xl-4 p-xl-0 justify-content-between">
        <div className="logo cf-sub text-primary px-4 px-md-0 position-fixed position-lg-relative ">
          <Link href="/">Software Recruitment co.</Link>
        </div>
        <div className="d-none d-lg-flex">
          <Navigation />
        </div>

        <div className="right_nav_btns d-flex gap-2 d-none d-lg-flex">
          <Link
            href="/"
            className="border-0 br-30 bg-secondary px-3 py-2 cf-base-bold text-darkbrown hover-transition"
          >
            Upload CV
          </Link>
          <Link
            href="/contact"
            className="border-0 br-30 bg-third px-3 py-2 cf-base-bold text-darkbrown hover-transition"
          >
            Contact Us
          </Link>
        </div>
        <div
          className="toggle_btn position-fixed d-flex d-lg-none"
          onClick={() => toggleNavbar()}
        >
          {isOpen ? (
            <svg
              className=""
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className=""
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
