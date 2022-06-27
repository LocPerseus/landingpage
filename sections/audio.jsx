import React from "react";
import Image from "next/image";
import AudioBookImg from "../assets/img/audio-book.png";

const Audio = () => {
  return (
    <section className="artist">
      <div className="container">
        <div className="section-title">
          <h3 style={{ color: "#8e8b5c" }}>
            From The Ground Up, They Chose To Rebuild, Express, And Share Their
            Story Despite Being Hidden Under Dark Bomb Shelters, Worrying About
            Their Children's Mental And Physical Stability, And Not Knowing
            Whether Or Not Tomorrow Will Be Different.
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-12" data-aos="fade-right" data-aos-delay="100">
            <Image src={AudioBookImg} />
          </div>
          <div className="col-12">
            <a
              href="javascript:void(0)"
              data-bs-toggle="modal"
              data-bs-target="#watchvideomodal"
              className="play-btn video-play-icon mt-0"
            >
              <i className="mdi mdi-play text-white"></i>
            </a>
            <h6 className="text-white text-uppercase mt-3">Play Video</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audio;
