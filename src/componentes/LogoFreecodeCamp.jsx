import freeCodeCampLogo from "../assets/freecodecamp-logo.png";
import "../App.css";

function LogoFreecodeCamp() {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img src={freeCodeCampLogo} className="freecodecamp-logo" />
    </div>
  );
}
export default LogoFreecodeCamp;
