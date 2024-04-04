import BreakingNews from "./BreakingNews";
import Header from "./shared/Header/Header";
import LeftSideNav from "./shared/LeftSideNav/LeftSideNav";
import Navbar from "./shared/Navbar/Navbar";
import RightSideNav from "./shared/RighSideNav/RightSideNav";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-4xl">News Coming Soon</h2>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
