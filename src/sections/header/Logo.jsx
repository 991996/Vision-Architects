import logo from "@/assets/logo.png";

function Logo({ isSticky = false }) {
  return (
    <a href="#home">
      <div className={isSticky ? "w-15" : "w-25 md:w-20"}>
        <img src={logo} alt="logo" className="w-full h-full object-contain" />
      </div>
    </a>
  );
}

export default Logo;
