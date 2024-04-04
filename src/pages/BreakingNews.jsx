import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex bg-slate-200 py-3 px-2">
      <button className="btn bg-pink-600 text-white">Breaking News</button>
      <Marquee pauseOnHover={true} speed={160}>
        I can be a react component, multiple React components......
      </Marquee>
    </div>
  );
};

export default BreakingNews;
