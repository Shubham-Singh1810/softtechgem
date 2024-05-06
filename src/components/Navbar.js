import React from "react";

function Navbar() {
    const navItem = [
        {
          name: "Home",
          icon: "fa fa-home",
        },
        {
          name: "About",
          icon: "fa fa-info-circle",
        },
        {
          name: "Services",
          icon: "fa fa-cogs",
        },
        {
          name: "Products",
          icon: "fa fa-laptop",
        },
        {
          name: "Team",
          icon: "fa fa-users",
        },
        {
          name: "Contact Us",
          icon: "fa fa-phone",
        },
        
      ];
  return (
    <div className="px-5 bg-light">
        <nav className="navbar navbar-expand-sm navbar-light bg-light px-5">
      <div className="container-fluid mx-lg-5 mx-md-2 mx-0">
        <a className="navbar-brand" href="javascript:void(0)">
          <img src="/brandLogo.png" style={{height:50, width:50}}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav mx-auto">
            {navItem?.map((v, i) => {
              return (
                <li className={`nav-item mx-4 ${i === 0 || i===5 ? 'mx-0' : ''}  ${i === 0 ? 'borderBottom' : ''}`}>
                  <b>
                  <a className="nav-link" href="javascript:void(0)">
                  <i className={`${v?.icon}${i === 0 ? ' textBlue' : ''}`}></i>
                    <span className={`ms-2 ${i === 0 ? 'textBlue' : ''}`}>{v?.name}</span>
                  </a>
                  </b>
                </li>
              );
            })}
          </ul>
          <div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
