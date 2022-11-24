import React from "react";

function Body() {
  return (
    <div className="body-container container-fluid">
      <img
        src={require("../Images/4.jpg")}
        width="1900px"
        height="800px"
        alt=""
      />

      <div class="top-left">
        <div className="Product-card row">
          {/* Form */}

          <form action="" className="mt-3" autoComplete="off">
            <div className="row">
              <div className="col-6">
                <img src={require("../Images/5.jpg")} alt="" />
              </div>
              <div className="col-6">
                <p className="text-center text-primary fs-2 mt-3 fw-semibold">
                  Book Ticket
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <div class="form-floating mb-3">
                  <select class="form-select form-control" id="floatingInput">
                    <option selected>From</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label className="text-dark" for="floatingInput">
                    From
                  </label>
                </div>

                <div class="form-floating mb-3">
                  <select class="form-select form-control" id="floatingInput">
                    <option selected>To</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label className="text-dark" for="floatingInput">
                    To
                  </label>
                </div>

                <div class="form-floating mb-3">
                  <select class="form-select form-control" id="floatingInput">
                    <option selected>General</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label className="text-dark" for="floatingInput">
                    Grneral
                  </label>
                </div>
              </div>

              <div className="col-4">
                <div class="form-floating mb-3">
                  <input
                    type="date"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label className="text-dark" for="floatingInput">
                    Select Date
                  </label>
                </div>

                <div class="form-floating mb-3">
                  <select class="form-select form-control" id="floatingInput">
                    <option selected>All Classes</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label className="text-dark" for="floatingInput">
                    Select Class
                  </label>
                </div>
              </div>
            </div>

            {/* Checkbox */}

            <div className="text-start mt-4 container">
              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="firstCheckbox"
              />
              <label
                class="form-check-label text-dark me-3"
                for="firstCheckbox"
              >
                Person with Disability Concession
              </label>

              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="firstCheckbox"
              />
              <label
                class="form-check-label text-dark me-3"
                for="firstCheckbox"
              >
                Flexible With Date
              </label>

              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="firstCheckbox"
              />
              <label
                class="form-check-label text-dark me-3"
                for="firstCheckbox"
              >
                Train Berth
              </label>

              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="firstCheckbox"
              />
              <label
                class="form-check-label text-dark me-3"
                for="firstCheckbox"
              >
                Railway Pass Concession
              </label>
            </div>

            
            <button className="btn btn-danger px-5 mt-4 mb-3">
                Serch
            </button>
          </form>
        </div>
      </div>

    
      <div class="Product-card top-left1">
       <p className="text-dark fw-semibold p-3"> 
       <span><span className="text-danger">New </span> IRCTC launches ticket booking on ASK DISHA 2.0 <span className="text-info">Click here</span></span> <br /> <br />

Indian Railways have started provisioning of Linen in trains. <span className="text-info">Click here</span> for the list of trains where Linen Services have been restarted as on date.
       </p>
      </div>


    </div>
  );
}

export default Body;
