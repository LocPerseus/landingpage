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
          <h2 style={{ color: "#8e8b5c" }}>The Angels Stands With Ukraine</h2>
          <h6>
            <strong>Illustrated</strong> and <strong>Written</strong> by
            Ukrainian Artists and graphics designers{" "}
          </h6>
          <p>
            Ukrainian Angels is a non for profit children's book benefiting the
            authors's <br /> heritage, roots, and giving back to the people of Ukraine.
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <Image className="artist-img" src={ArtistImg} />
          </div>
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <p className="fst-italic quotes">
              "These 46 pages depict a chance for us to speak, learn, and teach
              children about the war in a way that is sustainable, gentle, and
              bright. Bringing awareness to those who try to stop us from
              shining.
            </p>
            <p className="name-artist fw-bold">Aleksandra Oleksyuk</p>
            <p className="name-artist">The Ukrainian Angels’s main Artist and Book Designer </p>
          </div>
        </div>

        <div className="row artist-container">
          <div className="position-relative col-lg-4 col-md-6 artist-item filter-app">
            <div className="artist-img">
              <Image src={Artist1Img} className="img-fluid" alt="" />
            </div>
            <div className="artist-info">
              <h3 className="name-artist fw-bold">Aleksandra Godlevska</h3>
              <p className="name-artist">The Ukrainian Angels’s Illustrator</p>
            </div>
          </div>

          <div className="position-relative col-lg-4 col-md-6 artist-item filter-web">
            <div className="artist-img">
              <Image src={Artist2Img} className="img-fluid" alt="" />
            </div>
            <div className="artist-info">
              <h3 className="name-artist fw-bold">Anna Ishchenko </h3>
              <p className="name-artist">The Ukrainian Angels’s Illustrator</p>
            </div>
          </div>

          <div className="position-relative col-lg-4 col-md-6 artist-item filter-app">
            <div className="artist-img">
              <Image src={Artist3Img} className="img-fluid" alt="" />
            </div>
            <div className="artist-info">
              <h3 className="name-artist fw-bold">Megumi Arai</h3>
              <p className="name-artist">The Ukrainian Angels's Illustrator and Contributor</p>
            </div>
          </div>
          <div className="text-center">
            <a
              className="btn btn-secondary btn-lg btn-meet"
              href="#"
              role="button"
            >
              Meet Our Artists
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;
