import React from 'react'

function About() {
  return (
    // home section start
    <div className="px-5 homeBg">
      <div className="px-5 ">
        <div className="px-5 row homeBg">
        <div className="col-6 my-auto d-flex justify-content-start">
            <img
              src="https://bootstrapmade.com/demo/templates/Vesperr/assets/img/counts-img.svg"
              className="img-fluid"
            />
          </div>
        <div className="col-6 my-auto d-flex justify-content-end">
            <div>
             <button className='btn btn-outline-primary'>About Us</button>
              <h1 className="homeHeading" >Grow your business with <br/> <b className="text-primary">Soft Tech Gem</b></h1>
              <h2 className="fontMono">
                We are team of talented designers <br/> making websites with Bootstrap
              </h2>
              <button className="btn btn-primary mt-4" style={{width:"25%"}}>Read More...</button>
            </div>
          </div>
          
         
        </div>
      </div>
    </div>
    // home section end
  )
}

export default About