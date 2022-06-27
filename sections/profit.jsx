import React from "react";

const Profit = () => {
  return (
    <section className="bg-profit d-flex align-items-center">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-1"></div>
          <div className="col-lg-6 profit-title text-white">
            <h4>
              Because we all need more reasons <br /> than to cherish our light
            </h4>
            <p>
              These unsettling, delicate, and deeply intrusive realistic scenes
              catapult us into a new reality of activism. We must find new ways
              to articulate our pain and ban together. Supporting only the light
              hope, peace, and unity of a nation.
            </p>
          </div>
          <div className="col-lg-5 d-flex pt-4 pt-lg-0 justify-content-center align-self-center">
            <a
              className="btn btn-secondary btn-lg btn-donate"
              href="#"
              role="button"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profit;
