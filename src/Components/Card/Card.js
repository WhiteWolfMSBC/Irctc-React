import React from "react";

function Card() {
  return (
    <div className="container-xl container-lg container-md container-sm container-xs mt-5">

        <p className="text-dark text-center fs-1 fw-bold">
        HOLIDAYS
        </p>



      {/* Card */}

      <div className="row mt-5">
        <div className="col-xl-4">
          <div class="card" style={{ width: "20rem" }}>
            <img
              src={require("../Images/6.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Maharajas' Express</h5>
              <p class="card-text">
              Be it the spiritual devotee seeking blessings of Tirupati,
                Shirdi or Mata Vaishno Devi or the leisure traveller wanting to
                relish the Blue mountains of North East, Sand-dunes of
                Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes
                or Picturesque Islands, IRCTC has it all. Discover India through
                IRCTC!
              </p>
              <a href="#" class="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="col-xl-4">
          <div class="card" style={{ width: "20rem" }}>
            <img
              src={require("../Images/7.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">International Packages</h5>
              <p class="card-text">
                Best deals in International Holiday packages, handpicked by
                IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau,
                Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages
                are inclusive of sightseeing, meals, visa charges and overseas
                medical insurance to give you a hassle-free and memorable
                experience.
              </p>
              <a href="#" class="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="col-xl-4">
          <div class="card" style={{ width: "20rem" }}>
            <img
              src={require("../Images/8.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Domestic Air Packages</h5>
              <p class="card-text">
                Be it the spiritual devotee seeking blessings of Tirupati,
                Shirdi or Mata Vaishno Devi or the leisure traveller wanting to
                relish the Blue mountains of North East, Sand-dunes of
                Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes
                or Picturesque Islands, IRCTC has it all. Discover India through
                IRCTC!
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>



      {/* Crad 1 */}

      <div className="row mt-5">
        <div className="col-xl-4">
          <div class="card" style={{ width: "20rem" }}>
            <img
              src={require("../Images/6.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Bharat Gaurav Tourist Train</h5>
              <p class="card-text">
                IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier
                accommodation on train specially designed to promote domestic
                tourism in India. This train runs on various theme based
                circuits covering pilgrimage and heritage destinations in its
                itinerary on a 5 days to 20 days trip and showcase India’s rich
                cultural heritage.
              </p>
              <a href="#" class="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="col-xl-4">
          <div class="card" style={{ width: "20rem" }}>
            <img
              src={require("../Images/9.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Rail Tour Packages</h5>
              <p class="card-text">
              IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier
                accommodation on train specially designed to promote domestic
                tourism in India. This train runs on various theme based
                circuits covering pilgrimage and heritage destinations in its
                itinerary on a 5 days to 20 days trip and showcase India’s rich
                cultural heritage.
              </p>
              <a href="#" class="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="col-xl-4">
          <div class="card" style={{ width: "20rem" }}>
            <img
              src={require("../Images/10.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
              IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier
                accommodation on train specially designed to promote domestic
                tourism in India. This train runs on various theme based
                circuits covering pilgrimage and heritage destinations in its
                itinerary on a 5 days to 20 days trip and showcase India’s rich
                cultural heritage.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
