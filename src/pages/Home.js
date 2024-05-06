import React from "react";

function Home() {
  return (
    // home section start
    <div className="px-5 homeBg">
      <div className="px-5 ">
        <div className="px-5 row homeBg">
        <div className="col-6 my-auto">
            <div>
              <h1 className="homeHeading" >Grow your business with <br/> <b className="text-primary">Soft Tech Gem</b></h1>
              <h2 className="fontMono">
                We are team of talented designers <br/> making websites with Bootstrap
              </h2>
              <button className="btn btn-primary mt-4" style={{width:"25%"}}>Get Started</button>
            </div>
          </div>
          <div className="col-6 my-auto d-flex justify-content-end">
            <img
              src="https://bootstrapmade.com/demo/templates/Vesperr/assets/img/hero-img.png"
              className="img-fluid"
            />
          </div>
         
        </div>
      </div>
    </div>
    // home section end
  );
}

export default Home;
