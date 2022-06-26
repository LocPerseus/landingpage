import React from "react";
import Image from "next/image";
import bookImg from "../assets/img/book.png";

const Book = () => {
  return (
    <section className="dual-content" id="dual-info">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="col-md-9">
              <div className="dc-info">
                <h4>Retina-Ready &amp; Responsive</h4>
                <p>
                  The entire idea of the retina-ready technology is to give
                  sharper images, and to create something that would look as
                  sharp as it would in print. This is what you will find in the
                  Monstroid WordPress theme.
                </p>
              </div>
            </div>
          </div>
          <div className="dual-img"></div>
        </div>
      </div>
    </section>
  );
};

export default Book;
