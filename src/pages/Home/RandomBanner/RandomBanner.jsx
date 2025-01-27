import img from "../../../assets/home/home9.jpg";
const RandomBanner = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-white text-5xl font-bold">
              Blood Donation Campaign
            </h1>
            <p className="mb-5 text-slate-50">
              A Blood Donation Campaign is a community-driven initiative aimed
              at collecting blood donations to support healthcare facilities,
              emergency needs, or people requiring blood transfusions due to
              medical conditions, surgeries, or accidents.
            </p>
            <button className="btn btn-error text-white">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomBanner;
