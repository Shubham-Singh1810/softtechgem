import React, { useState } from "react";

function Product() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    // home section start
    <div className="px-5 homeBg">
      <div className="px-5 ">
        <div className="px-5 row homeBg">
          <div className="col-12 ">
           
            <div className="row p-0 d-flex justify-content-start">
              <div
                className={`flip-card col-6 p-2  ${isFlipped ? "flipped" : ""}`}
                onClick={handleFlip}
              >
                <div className="flip-card-inner shadow  m-3 rounded">
                  <div className="flip-card-front">
                    <img src="/manishdesign.jpeg" className="img-fluid" />
                  </div>
                  <div className="flip-card-back p-3 d-flex align-items-center">
                    <div className="my-auto">
                      <h3>Manish Design Studio</h3>
                      <p>
                        This is an ecommerce website for seling banner, poster,
                        card etc{" "}
                      </p>
                      <button className="btn btn-light">Visit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`flip-card col-6 p-2  ${isFlipped ? "flipped" : ""}`}
                onClick={handleFlip}
              >
                <div className="flip-card-inner shadow  m-3 rounded">
                  <div className="flip-card-front">
                    <img src="/rawfitness.jpeg" className="img-fluid" />
                  </div>
                  <div className="flip-card-back p-3 d-flex align-items-center justify-content-center">
                    <div className="my-auto">
                      <h3>Raw Fitnee</h3>
                      <p>
                        This is an fitness website which have all the features
                      </p>
                      <button className="btn btn-light">Visit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`flip-card col-6 p-2  ${isFlipped ? "flipped" : ""}`}
                onClick={handleFlip}
              >
                <div className="flip-card-inner shadow  m-3 rounded">
                  <div className="flip-card-front">
                    <img src="/runmachine.jpeg" className="img-fluid" />
                  </div>
                  <div className="flip-card-back p-3 d-flex align-items-center justify-content-center">
                    <div className="my-auto">
                      <h3>Run Machine</h3>
                      <p>
                        Social media app with look and feel same as of instagram
                      </p>
                      <button className="btn btn-light">Visit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`flip-card col-6 p-2  ${isFlipped ? "flipped" : ""}`}
                onClick={handleFlip}
              >
                <div className="flip-card-inner shadow  m-3 rounded">
                  <div className="flip-card-front">
                    <img src="/manishdesign.jpeg" className="img-fluid" />
                  </div>
                  <div className="flip-card-back p-3 d-flex align-items-center">
                    <div className="my-auto">
                      <h3>Manish Design Studio</h3>
                      <p>
                        This is an ecommerce website for seling banner, poster,
                        card etc{" "}
                      </p>
                      <button className="btn btn-light">Visit</button>
                    </div>
                  </div>
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

export default Product;
