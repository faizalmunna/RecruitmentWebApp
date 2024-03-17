"use client";
import React, { useState } from "react";
import Slider from "../slider/Slider";

const LatestJobs = () => {
  const [slidesToShow, setSlidesToShow] = useState(getInitialSlidesToShow());

  function getInitialSlidesToShow() {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        return 1;
      } else if (window.innerWidth < 991) {
        return 2;
      } else {
        return 3;
      }
    } else {
      return 3;
    }
  }

  const jobs = [
    {
      title: "Software Engineer1",
      techStack: "Python",
      location: "London",
      salary: "£65,000",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      postedOn: "29/08/2023",
    },
    {
      title: "Software Engineer2",
      techStack: "Python",
      location: "London",
      salary: "£65,000",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      postedOn: "29/08/2023",
    },
    {
      title: "Software Engineer3",
      techStack: "Python",
      location: "London",
      salary: "£65,000",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      postedOn: "29/08/2023",
    },
    {
      title: "Software Engineer4",
      techStack: "Python",
      location: "London",
      salary: "£65,000",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      postedOn: "29/08/2023",
    },
    {
      title: "Software Engineer5",
      techStack: "Python",
      location: "London",
      salary: "£65,000",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      postedOn: "29/08/2023",
    },
    {
      title: "Software Engineer6",
      techStack: "Python",
      location: "London",
      salary: "£65,000",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      postedOn: "29/08/2023",
    },
  ];

  return (
    <div className="latest-jobs-container bg-lightblue d-flex flex-column align-items-center  p-80">
      <h2 className="sb-title text-darkblue mb-4 mb-lg-5">Latest Jobs</h2>
      <div className="container p-4 p-xl-0">
        <Slider jobs={jobs} slidesToShowSetter={setSlidesToShow} />
      </div>
    </div>
  );
};

export default LatestJobs;
