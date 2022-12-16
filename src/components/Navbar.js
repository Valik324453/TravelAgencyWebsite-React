import { NavLink } from "react-router-dom";
import { BiHomeAlt, BiBookAlt, BiWater } from "react-icons/bi";
import { GiForestCamp, GiMountains, GiSnowflake1 } from "react-icons/gi";
import { FaPrayingHands } from "react-icons/fa";
import { MdHouseboat } from "react-icons/md";

export default function Navbar() {
  return (
    <header>
      <nav className="nav-left">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          <BiHomeAlt size={40} />
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/about"
        >
          <BiBookAlt size={40} />
        </NavLink>
      </nav>

      <img
        className="img-logo"
        alt=""
        src={
          "https://www.onetwotrip.com/ru/blog/static/images/travel-now/time-to-travel.jpg"
        }
      />

      <nav className="nav-right">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/forest"
        >
          <GiForestCamp size={40} />
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/sea"
        >
          <BiWater size={40} />
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/mountain"
        >
          <GiMountains size={40} />
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/arctic"
        >
          <GiSnowflake1 size={40} />
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/monastery"
        >
          <FaPrayingHands size={40} />
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/lake"
        >
          <MdHouseboat size={40} />
        </NavLink>
      </nav>
    </header>
  );
}
