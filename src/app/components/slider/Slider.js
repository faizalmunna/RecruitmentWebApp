import React, { useState, useEffect } from "react";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Slider = ({ jobs }) => {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationInProgress, setAnimationInProgress] = useState(false);

  function getSlidesToShow() {
    return typeof window !== "undefined" && window.innerWidth < 991 ? 1 : 3;
  }

  useEffect(() => {
    function handleResize() {
      setSlidesToShow(getSlidesToShow());
    }

    setSlidesToShow(getSlidesToShow());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToNextSlide = () => {
    if (currentIndex + slidesToShow < jobs.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setAnimationInProgress(true);
      setTimeout(() => {
        setAnimationInProgress(false);
      }, 500);
    }
  };

  const goToPreviousSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setAnimationInProgress(true);
      setTimeout(() => {
        setAnimationInProgress(false);
      }, 500);
    }
  };

  const bgColors = ["bg-secondary", "bg-primary", "bg-third"];

  const isNextDisabled = currentIndex + slidesToShow >= jobs.length;
  const isPreviousDisabled = currentIndex === 0;

  return (
    <div className="slider-container position-relative">
      <div className="slider d-flex">
        {jobs
          .slice(currentIndex, currentIndex + slidesToShow)
          .map((job, index) => (
            <div
              key={index}
              className={`slide  d-flex flex-column align-items-start br-30 p-40 gap-card ${
                bgColors[index % bgColors.length]
              }  ${
                bgColors[index % bgColors.length] === "bg-primary"
                  ? "text-white"
                  : "text-primary"
              } ${
                animationInProgress
                  ? currentIndex > index
                    ? "animate-next"
                    : "animate-previous"
                  : ""
              }`}
            >
              <span className="br-5 bg-white px-1 w-auto d-inline-flex justify-content-center align-items-center gap-1">
                <Image alt="python" src="/py.svg" height={18} width={18} />
                <span className="text-primary"> {job.techStack}</span>
              </span>
              <h3 className="c-title m-0">{job.title}</h3>
              <div className="d-flex flex-column gap-2">
                <div className="m-0 d-flex align-items-center gap-2">
                  {bgColors[index % bgColors.length] === "bg-primary" ? (
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-white fs-icon-card"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="fs-icon-card"
                    />
                  )}

                  {job.location}
                </div>
                <div className="m-0 d-flex align-items-center gap-2">
                  {bgColors[index % bgColors.length] === "bg-primary" ? (
                    <FontAwesomeIcon
                      icon={faMoneyBillAlt}
                      className="text-white fs-icon-card"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faMoneyBillAlt}
                      className="fs-icon-card"
                    />
                  )}
                  {job.salary}
                </div>
              </div>

              <p className="m-0">{job.description}</p>
              <div className="bg-white br-30  d-flex w-100 justify-content-center hover-transition">
                <Link
                  href="/"
                  className="text-primary cf-base-medium px-3 py-3 w-100 h-100 text-center "
                >
                  View this job
                </Link>
              </div>
              <p className="m-0 cf-13">Posted on: {job.postedOn}</p>
            </div>
          ))}
      </div>
      <div className="slider-controls mt-4 pt-2 gap-3 d-flex">
        <button
          className="border-0 bg-transparent hover-transition"
          onClick={goToPreviousSlide}
          disabled={isPreviousDisabled || animationInProgress}
        >
          {isPreviousDisabled === false ? (
            <Image alt="arrowicon" src="/ar-l.svg" height={40} width={40} />
          ) : (
            <Image alt="arrowicon" src="/ar-off-l.svg" height={40} width={40} />
          )}
        </button>
        <button
          onClick={goToNextSlide}
          className="border-0 bg-transparent hover-transition"
          disabled={isNextDisabled || animationInProgress}
        >
          {isNextDisabled === false ? (
            <Image alt="arrowicon" src="/ar-r.svg" height={40} width={40} />
          ) : (
            <Image alt="arrowicon" src="/ar-off-r.svg" height={40} width={40} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Slider;
