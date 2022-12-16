import { data } from "./Context";
import { useContext, useState } from "react";

export default function Arctic() {
  const locations = useContext(data);
  const [personsCount, setNumber] = useState(1);

  function getArcticLocations() {
    let arcticLocations = locations.filter((loc) => loc.category === "arctic");
    return arcticLocations;
  }

  let arctic = getArcticLocations();

  return (
    <div className="container-product-card">
      <div className="title-product-card">
        <h1>Arctic</h1>
      </div>
      {arctic.map((location) => (
        <div key={location.id}>
          <div className="img-product-card">
            <img className="loc-img" src={location.img} />
          </div>
          <div className="text-product-card">
            <h3>{location.title}</h3>
            <p>{location.location}</p>
            <h4>{location.text}</h4>
            <h3>
              Persons count: {personsCount}
              <button
                className="buttons-inc-dec"
                onClick={() => {
                  setNumber(personsCount + 1);
                }}
              >
                +
              </button>
              <button
                className="buttons-inc-dec"
                id="minusButton"
                onClick={() => {
                  if (personsCount <= 1) {
                    const button = document.querySelector("minusButton");
                    button.disabled = true;
                  }
                  setNumber(personsCount - 1);
                }}
              >
                -
              </button>
            </h3>

            <h2>Total price: {location.pricePerNight * personsCount}</h2>
            <button className="button-order">order</button>
          </div>
        </div>
      ))}
    </div>
  );
}
