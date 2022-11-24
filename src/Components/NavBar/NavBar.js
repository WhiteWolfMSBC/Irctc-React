import React from "react";

function NavBar() {
  return (
    <div>
      {/* NavBar */}

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={require("../Images/1.png")}
              className="img-fluid"
              width="66px"
              height="80px"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse container-xl container-lg container-md container-sm container-xs"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 ms-3 mb-lg-0">
              <li className="nav-item ms-5">
                <a className="nav-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-home-2"
                    width="27"
                    height="27"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                    <rect x="10" y="12" width="4" height="4"></rect>
                  </svg>
                </a>
              </li>
              <li className="nav-item badge bg-primary text-wrap mt-1">
                <a
                  className="nav-link active text-light fw-normal fs-6"
                  style={{ width: "10rem", height: "1.6rem" }}
                  aria-current="page"
                  href="#"
                >
                  IRCTC EXCLUSIVE
                </a>
              </li>
              <li className="nav-item mt-1">
                <a className="nav-link fw-semibold" href="#">
                  TRAINS
                </a>
              </li>

              <li className="nav-item mt-1">
                <a className="nav-link fw-semibold">BUSES</a>
              </li>

              <li className="nav-item mt-1">
                <a className="nav-link fw-semibold" href="#">
                  FLIGHTS
                </a>
              </li>

              <li className="nav-item mt-1">
                <a className="nav-link fw-semibold">HOTELS</a>
              </li>

              <li className="nav-item mt-1">
                <a className="nav-link fw-semibold" href="#">
                  HOLIDAYS
                </a>
              </li>

              <li className="nav-item mt-1">
                <a className="nav-link fw-semibold">LOYALTY</a>
              </li>

              <li className="nav-item mt-1">
                <a className="nav-link fw-semibold" href="#">
                  MEALS
                </a>
              </li>

              <li className="nav-item mt-1">
                <a className="nav-link fw-semibold">PROMOTIONS</a>
              </li>

              <li className="nav-item badge bg-primary text-wrap mt-1">
                <a
                  className="nav-link active text-light fw-normal fs-6"
                  style={{ width: "10rem", height: "1.6rem" }}
                  aria-current="page"
                  href="#"
                >
                  PREMIUM PARTNER
                </a>
              </li>
              <li className="nav-item mt-1">
                <a className="nav-link fw-semibold">MORE</a>
              </li>
            </ul>
          </div>
          <a className="navbar-brand" href="#">
            <img
              src={require("../Images/2.png")}
              className="img-fluid"
              alt=""
            />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
