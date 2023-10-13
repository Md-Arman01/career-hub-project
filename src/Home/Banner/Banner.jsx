
const Banner = () => {
  return (
    <div className=" bg-[#f9f8ff]">

      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-[400px] h-[300px]">
            <h1 className="text-5xl font-extrabold text-[#1A1919] leading-[55px]">One Step <br />
             Closer To Your <br />
             <span className="text-5xl font-extrabold bg-gradient-to-t from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">Dream Job</span></h1>
            <p className="text-[#757575] text-xs font-medium py-6 w-[350px] leading-[20px]">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn normal-case bg-gradient-to-r text-white from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500 ">Get Started</button>
          </div>
          <img
            src='https://i.ibb.co/HTrGgTT/user.png'
            className="w-[520px]"
          />
        </div>
      </div>

    </div>
  );
};

export default Banner;
