import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center">
      <div>
        <img className="mx-auto pt-10" src={logo} alt="" />
        <p>Journalism without Fear and Favour</p>
        <p className="text-xl">{moment().format("dddd, MMMM Do, YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;
