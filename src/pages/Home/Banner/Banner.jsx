import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4 sm:px-10 lg:px-20 bg-gradient-to-br from-red-700 to-red-500 text-white">
      <div className="text-center max-w-4xl w-full">
        {/* Small Heading */}
        <h3 className="text-base sm:text-lg md:text-2xl font-semibold tracking-wide">
          Every Drop Counts, Every Life Matters
        </h3>

        {/* Main Heading */}
        <h2 className="font-extrabold text-3xl sm:text-5xl md:text-6xl mt-4 leading-tight">
          Donate Blood, <br className="hidden sm:block" /> Make a Difference
          Today!
        </h2>

        {/* Subtitle Text */}
        <p className="text-sm sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          A single donation can save up to three lives. Join us in creating a
          healthier, stronger community.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <NavLink
            to="/blood-request"
            className="px-5 py-3 sm:px-6 sm:py-3 bg-white text-red-600 hover:bg-gray-200 transition-all duration-300 rounded-lg font-bold text-sm sm:text-lg shadow-lg"
          >
            Become a Donor
          </NavLink>
          <NavLink
            to="/create-events"
            className="px-5 py-3 sm:px-6 sm:py-3 border-2 border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300 rounded-lg font-bold text-sm sm:text-lg"
          >
            Request Blood
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
