import { data } from "./Context";
import { useContext, useState } from "react";

export default function Mountain() {
  const locations = useContext(data);
  const [personsCount, setNumber] = useState(1);

  function getMountainLocations() {
    let mountainLocations = locations.filter(
      (loc) => loc.category === "mountain"
    );
    return mountainLocations;
  }

  let mountain = getMountainLocations();

  return (
    <div className="container-product-card">
      <div className="title-product-card">
        <h1>Mountain</h1>
      </div>
      {mountain.map((location) => (
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
