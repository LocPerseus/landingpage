import React from "react";
import Image from "next/image";
import ArtistImg from "../assets/img/artist.png";
import Artist1Img from "../assets/img/artist_1.png";
import Artist2Img from "../assets/img/artist_2.png";
import Artist3Img from "../assets/img/artist_3.png";

const Artists = () => {
  return (
    <section className="artist">
      <div className="container">
        <div className="section-title">
          <h2>The Angels Stands With Ukraine</h2>
          <p>
            Illustrated and Written by Ukrainian Artists and graphics designers{" "}
          </p>
          <p>
            Ukrainian Angels is a non for profit children's book benefiting the
            authors's heritage, roots, and giving back to the people of Ukraine.{" "}
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <Image src={ArtistImg} />
          </div>
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <p className="fst-italic">
              "These 46 pages depict a chance for us to speak, learn, and teach
              children about the war in a way that is sustainable, gentle, and
              bright. Bringing awareness to those who try to stop us from
              shining.
            </p>
            <h3>Aleksandra Oleksyuk</h3>
            <p>The Ukrainian Angels’s main Artist and Book Designer </p>
          </div>
        </div>

        <div className="row artist-container">
          <div className="position-relative col-lg-4 col-md-6 artist-item filter-app">
            <div className="artist-img">
              <Image src={Artist1Img} className="img-fluid" alt="" />
            </div>
            <div className="artist-info">
              <h4>Aleksandra Godlevska</h4>
              <p>The Ukrainian Angels’s Illustrator</p>
            </div>
          </div>

          <div className="position-relative col-lg-4 col-md-6 artist-item filter-web">
            <div className="artist-img">
              <Image src={Artist2Img} className="img-fluid" alt="" />
            </div>
            <div className="artist-info">
              <h4>Anna Ishchenko </h4>
              <p>The Ukrainian Angels’s Illustrator</p>
            </div>
          </div>

          <div className="position-relative col-lg-4 col-md-6 artist-item filter-app">
            <div className="artist-img">
              <Image src={Artist3Img} className="img-fluid" alt="" />
            </div>
            <div className="artist-info">
              <h4>Megumi Arai</h4>
              <p>The Ukrainian Angels's Illustrator and Contributor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;
