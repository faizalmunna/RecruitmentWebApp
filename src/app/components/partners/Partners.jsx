import React from "react";
import Image from "next/image";
import "./style.scss";
const Partners = () => {
  const imageData = [
    { src: "/ms.jpg", alt: "microsoft" },
    { src: "/or.jpg", alt: "oracle" },
    { src: "/at.jpg", alt: "atlasean" },
    { src: "/cf.jpg", alt: "cloudflare" },
    { src: "/vm.jpg", alt: "vmware" },
  ];
  return (
    <div className="what_we_do p-60 d-flex flex-column justify-content-center">
      <h2 className="text-center mb-4 w-full cf-base text-bold text-lightgrey1">
        Who we work with
      </h2>
      <div className="container">
        {imageData.map((image, index) => (
          <div key={index} className="flex-fill position-relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={238}
              height={60}
              className="img-fluid hover-transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
