import React from "react";
import Navbar from "../Componantes/Navbar";
import Footer from "../Componantes/Footer";
const Serveic = () => {
  return (
    <>
      <div className="super_container">
        <Navbar />
        <div id="SERVICES" className="services h-auto">
          <div className="container text-center">
            <h1>SERVICES WE PROVIDES</h1>
            <p className="w-75 text-secondary mt-4 m-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam reprehenderit magni nostrum atque officia quis, commodi
              incidunt! Similique, ad. Facilis quam laudantium recusandae saepe
              hic.
            </p>
            <div className="row mt-5 mb-5">
              <div className="info col-lg-4 col-md-12 col-sm-12 mt-5 h-auto">
                <div className="row mt-5">
                  <div className="desc col-8 ">
                    <h4>Web Development</h4>
                    <p className="text-secondary">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="icon col-4 ">
                    <i className="fa-solid fa-rocket" />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="desc col-8 ">
                    <h4>Photography</h4>
                    <p className="text-secondary">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="icon col-4 ">
                    <i className="fa-solid fa-camera" />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="desc col-8 ">
                    <h4>Web Design</h4>
                    <p className="text-secondary">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="icon col-4 ">
                    <i className="fa-solid fa-desktop" />
                  </div>
                </div>
              </div>
              <div className="img col-lg-4 col-md-12 col-sm-12 h-auto mt-2 mb-2">
                <img src="Imagies/service/service-mockup.png" alt="" />
              </div>
              <div className="info col-lg-4 col-md-12 col-sm-12 mt-5 h-auto">
                <div className="row mt-5">
                  <div className="col-4">
                    <div className="icon ">
                      <i className="fa-solid fa-gear" />
                    </div>
                  </div>
                  <div className="desc col-8 ">
                    <h4>Online Marketing</h4>
                    <p className="text-secondary">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-4">
                    <div className="icon ">
                      <i className="fa-solid fa-bullhorn" />
                    </div>
                  </div>
                  <div className="desc col-8 ">
                    <h4>Degital Media</h4>
                    <p className="text-secondary">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-4">
                    <div className="icon ">
                      <i className="fa-solid fa-gear" />
                    </div>
                  </div>
                  <div className="desc col-8 ">
                    <h4>24/7 Support</h4>
                    <p className="text-secondary">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Serveic;
