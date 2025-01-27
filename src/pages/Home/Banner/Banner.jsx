const Banner = () => {
  return (
    <div className=" flex flex-col justify-center items-start  lg:h-[100vh] px-10 bg-bannerImg bg-repeat bg-cover bg-right bg-white opacity-80">
      <h3 className=" text-red-500 md:text-4xl text-2xl mt-10 md:mt-0 font-bold">
        Donate blood,save life !
      </h3>
      <h2 className="text-white font-extrabold md:text-7xl text-3xl my-8">
        Donate Blood And <br></br> Inspire Others.
      </h2>
      <button className="btn btn-error my-5 font-extrabold text-white">
        Explore Now
      </button>
    </div>
  );
};

export default Banner;
