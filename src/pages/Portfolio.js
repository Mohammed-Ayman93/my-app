import React from "react";
import Navbar from "../Componantes/Navbar";
import Footer from "../Componantes/Footer";
const Portfolio = () => {
  return (
    <>
      <div className="super_container">
        <Navbar />
        <div id="PORTFOLIO" className="PORTFOLIO mt-5 h-auto">
          <div className="container text-center">
            <h1 className="text-center mt-5 mb-5">Our Awesome Projects</h1>
            <p className="w-75 m-auto text-secondary mt-5 mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis quasi laborum asperiores repellat laboriosam itaque?
              Explicabo pariatur minima nam mollitia cumque nisi consequuntur
              nesciunt delectus!{" "}
            </p>
            <div className="links w-75 m-auto mt-5 mb-5 ">
              <a href="#">ALL</a>
              <a href="#">WEB DESIGN</a>
              <a href="#">PHOTOGRAPHY</a>
              <a href="#">WEB DEVELOPMENT</a>
              <a href="#">ONLINE MARKTING</a>
              <a href="#">DEGITAL MARKTING</a>
            </div>
            <div className="album row ">
              <div className="img col-lg-4 col-md-6 col-sm-12 mt-2 mb-2">
                <img
                  className="w-100"
                  src="Imagies/portfolio/portfolio_1.jpg"
                  alt=""
                />
              </div>
              <div className="img col-lg-4 col-md-6 col-sm-12 mt-2 mb-2">
                <img
                  className="w-100"
                  src="Imagies/portfolio/portfolio_2.jpg"
                  alt=""
                />
              </div>
              <div className="img col-lg-4 col-md-6 col-sm-12 mt-2 mb-2">
                <img
                  className="w-100"
                  src="Imagies/portfolio/portfolio_3.jpg"
                  alt=""
                />
              </div>
              <div className="img col-lg-4 col-md-6 col-sm-12 mt-2 mb-2">
                <img
                  className="w-100"
                  src="Imagies/portfolio/portfolio_4.jpg"
                  alt=""
                />
              </div>
              <div className="img col-lg-4 col-md-6 col-sm-12 mt-2 mb-2">
                <img
                  className="w-100"
                  src="Imagies/portfolio/portfolio_5.jpg"
                  alt=""
                />
              </div>
              <div className="img col-lg-4 col-md-6 col-sm-12 mt-2 mb-2">
                <img
                  className="w-100"
                  src="Imagies/portfolio/portfolio_6.jpg"
                  alt=""
                />
              </div>
              <div className="img col-lg-4 col-md-6 col-sm-12 mt-2 mb-2">
                <img
                  className="w-100"
                  src="Imagies/portfolio/portfolio_7.jpg"
                  alt=""
                />
              </div>
              <div className="img col-lg-4 col-md-6 col-sm-12 mt-2 mb-2">
                <img
                  className="w-100"
                  src="Imagies/portfolio/portfolio_8.jpg"
                  alt=""
                />
              </div>
              <div className="img col-lg-4 col-md-6 col-sm-12 mt-2 mb-2">
                <img
                  className="w-100"
                  src="Imagies/portfolio/portfolio_9.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="download text-center text-white">
            <h1>Our Latest Design &amp; Creative Templates</h1>
            <button type="button" className="btn btn-outline-light">
              DOWNLOAD NOW
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
