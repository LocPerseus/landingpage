import React from "react";

const Banner = () => {
  return (
    <section className="banner d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1 bg-banner"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 style={{ color: "#8e8b5c" }}>Ukrainian Angels</h2>
            <h6 className="banner-title">
              A Charity children’s book benefiting the people and community of
              Ukraine as they heal and glow.
            </h6>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <p className="banner-text">
                ALL PROFITS DIRECTLY BENEFIT THE CITIZENS OF UKRAINE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
