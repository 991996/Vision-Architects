import logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";
import { Link } from "react-router-dom";

function Logo({ className = "w-20", color = "black" }) {
  return (
    <Link to="/">
      <div className={className}>
        <img
          src={color === "black" ? logo : logoWhite}
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
}

export default Logo;
