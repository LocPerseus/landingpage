import React from "react";

const Banner = () => {
  return (
    <section className="banner d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Ukrainian Angels</h1>
            <h5>
              A Charity children’s book benefiting the people and community of
              Ukraine as they heal and glow.
            </h5>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <p>ALL PROFITS DIRECTLY BENEFIT THE CITIZENS OF UKRAINE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
