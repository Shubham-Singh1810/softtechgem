import React from "react";

function Services() {
  return (
    // home section start
    <div className="px-5 homeBg">
      <div className="px-5 ">
        <div className="px-5 row homeBg">
          <div className="col-6 my-auto">
            <div>
              <button className="btn btn-outline-primary">Services</button>
              <h1 className="homeHeading">
                Grow your business with <br />{" "}
                <b className="text-primary">Soft Tech Gem</b>
              </h1>
              <h2 className="fontMono">
                We are team of talented designers <br /> making websites with
                Bootstrap
              </h2>
              <button className="btn btn-primary mt-4" style={{ width: "25%" }}>
                Read More...
              </button>
            </div>
          </div>
          <div className="col-6 my-auto d-flex justify-content-end">
            <div className="row p-0">
              <div className="col-6 ">
                <div className="mt-4 me-1 shadow-lg rounded p-2">
                <img
                  src="https://bootstrapmade.com/demo/templates/Vesperr/assets/img/counts-img.svg"
                  className="img-fluid"
                />
                <h5 className="text-center mt-3">Website Development</h5>
                </div>
              </div>
              <div className="col-6">
              <div className="mb-4 shadow-lg rounded p-2">
                <img
                  src="https://bootstrapmade.com/demo/templates/Vesperr/assets/img/counts-img.svg"
                  className="img-fluid"
                />
                <h5 className="text-center mt-3">App Development</h5>
                </div>
              </div>
              <div className="col-6 ">
                <div className="mt-4 me-1 shadow-lg rounded p-2">
                <img
                  src="https://bootstrapmade.com/demo/templates/Vesperr/assets/img/counts-img.svg"
                  className="img-fluid"
                />
                <h5 className="text-center mt-3">UI/UX Design</h5>
                </div>
              </div>
              <div className="col-6">
              <div className="mb-4 shadow-lg rounded p-2">
                <img
                  src="https://bootstrapmade.com/demo/templates/Vesperr/assets/img/counts-img.svg"
                  className="img-fluid"
                />
                <h5 className="text-center mt-3">Digital Marketing</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // home section end
  );
}

export default Services;
