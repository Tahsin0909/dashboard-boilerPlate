// import logo from "../../assets/logo.png";
import logo from "../../assets/Coloredlogo.png";
import logo2 from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = ({
  dark = false,
  size = "lg",
}: {
  dark?: boolean;
  size?: "sm" | "md" | "lg";
}) => {
  // Define size classes
  const sizeClasses = {
    sm: "w-20 h-20", // small - 80px
    md: "w-52 h-20", // medium - 128px
    lg: "w-64  h-40", // large - 160px (matches your current 400x400 but scaled down)
  };

  return (
    <Link to="/">
      {dark ? (
        <img
          alt="Company logo"
          src={logo2}
          className={`object-contain  ${sizeClasses[size]}`}
        />
      ) : (
        <img
          alt="Company logo"
          src={logo}
          className={`object-contain  ${sizeClasses[size]}`}
        />
      )}
    </Link>
  );
};

export default Logo;
