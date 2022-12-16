import { data } from "./Context";
import { useContext } from "react";

export default function About() {
  const locations = useContext(data);

  return (
    <div className="container-main-about">
      <img
        className="img-about-main"
        alt=""
        src={
          "https://www.jetsetter.com//uploads/sites/7/2018/04/YlQfxX0B-1380x690.jpeg"
        }
      />
      <div className="text-about">
        <h1>See our {locations.length} locations</h1>
        <p>
          A resort is a self-contained destination that can meet all of your
          travel requirements in one place. You won't have to leave the property
          to get food, drinks, entertainment, shopping, or other activities.
        </p>
      </div>
    </div>
  );
}
