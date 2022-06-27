import React from "react";
import Image from "next/image";
import PlayButton from "../assets/img/play-button.png";

const Audio = () => {
  return (
    <section>
      <div className="container">
        <div className="section-title">
          <h4 style={{ color: "#8e8b5c" }}>
            From The Ground Up, They Chose To Rebuild, Express, And Share Their
            Story Despite Being Hidden Under Dark Bomb Shelters, Worrying About
            Their Children's Mental And Physical Stability, And Not Knowing
            Whether Or Not Tomorrow Will Be Different.
          </h4>
        </div>
        <div className="bg-audio row justify-content-center text-center align-items-center">
          <div className="col-lg-12">
            <a
              data-bs-toggle="modal"
              data-bs-target="#watchvideomodal"
              className="play-btn video-play-icon mt-0"
            >
              <Image src={PlayButton} />
            </a>
            <h6 className="text-white text-uppercase mt-3">Play Video</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audio;
