import { data } from "./Context";
import { useContext } from "react";

export default function Main() {
  return (
    <div className="container-main-about">
      <img
        className="img-about-main"
        alt=""
        src={
          "https://www.lek.com/sites/default/files/hero-images/insights/All-inclusive-hero.png"
        }
      />
      <div className="text-main">
        <h1>Life is better outside</h1>
        <p>Reserve sites at your favorite RV parks and campgrounds</p>
      </div>
    </div>
  );
}
