import React from "react";
import Image from "next/image";
import "./style.scss";
const Hero = () => {
  return (
    <div className="bnr_wrap">
      <div className="top-left">
        <Image
          src="/el1.svg"
          alt="Top Left"
          width={180}
          height={180}
        
        />
      </div>
      <div className="bottom-right">
        <Image
          src="/el2.svg"
          alt="Bottom Right"
          width={240}
          height={240}
        
        />
      </div>
      <div className="hero bg-primary p-100">
        <div className="hero_Inner d-flex justify-content-between align-items-center container p-4 p-xl-0">
          <div className="row m-0 w-100">
            <div className="hero_left d-flex flex-column justify-content-center col-12 col-lg-6 custom-z1 p-0">
              <p className="text-white px-4 mt-lg-0 mt-5 px-md-0 text-center text-lg-left">
                Software Recruitment Specialists
              </p>
              <h2 className="cf-bnr text-white px-4 px-md-0 l-spacing text-center text-lg-left">
                Elevate your career
              </h2>
              <div className="px-4 px-md-0">
                <form>
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start  mb-3">
                    <input
                      type="text"
                      className="border-0 form-control"
                      placeholder="E.g. networking"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary text-mediumbrown border-0 m-0 cf-base-bold"
                    >
                      Search jobs
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="hero_right col-12 col-lg-6 p-4 p-lg-0  text-center">
              <Image
                src="/bnrimg.png"
                alt="Bottom Right"
                width={507}
                height={480}
                className="img-fluid hover-transition"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
