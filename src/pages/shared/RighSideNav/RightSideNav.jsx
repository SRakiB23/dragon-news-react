import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle /> Login with Google
        </button>

        <button className="btn btn-outline w-full">
          <FaGithub /> Login with GitHub
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl pb-4">Find Us On</h2>
        <a
          className="p-4 flex items-center text-lg border rounded-t-lg"
          href="www.facebook.com"
        >
          <FaFacebook className="mr-3" />
          Facebook
        </a>
        <a
          className="p-4 flex items-center text-lg border-x"
          href="www.facebook.com"
        >
          <FaTwitter className="mr-3" />
          Twitter
        </a>
        <a
          className="p-4 flex items-center text-lg border rounded-b-lg"
          href="www.facebook.com"
        >
          <FaInstagram className="mr-3" />
          Instagram
        </a>
      </div>
      {/*q-zone*/}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q-Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
