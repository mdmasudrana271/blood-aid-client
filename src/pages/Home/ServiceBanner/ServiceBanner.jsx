import { FaHandsHelping, FaHeartbeat, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ServiceBanner = () => {
  return (
    <>
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white text-center">
        <p className="text-lg font-bold uppercase">
          Our Commitment to Saving Lives
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-4">
          Essential Blood Donation Services for Life Preservation
        </h2>
      </section>

      {/* Section 1: Blood Donation Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center">
          {/* Service Card 1: Blood Donation Process */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <div className="p-6 text-center">
              <FaHandsHelping className="text-4xl text-red-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                The Blood Donation Process
              </h3>
              <p className="text-gray-600 mb-4">
                Blood donation is a straightforward and safe process that
                involves donating blood, which is then used in emergencies,
                surgeries, and for treating various medical conditions. Your
                blood could be the difference between life and death for someone
                in need.
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Service Card 2: Types of Blood Donations */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <div className="p-6 text-center">
              <FaHeartbeat className="text-4xl text-red-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Types of Blood Donations
              </h3>
              <p className="text-gray-600 mb-4">
                There are several types of blood donations, including whole
                blood, plasma, and platelet donations. Each type plays a vital
                role in medical treatments and helps save lives in different
                scenarios. Learn which type suits your ability and health
                condition.
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Service Card 3: Benefits of Donating Blood */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <div className="p-6 text-center">
              <FaUsers className="text-4xl text-red-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Benefits of Donating Blood
              </h3>
              <p className="text-gray-600 mb-4">
                Donating blood not only saves lives, but also provides health
                benefits for the donor. Regular blood donation can help reduce
                the risk of heart disease, maintain healthy iron levels, and
                improve overall wellbeing. It’s a win-win for both the donor and
                the recipient.
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How to Become a Blood Donor */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
            Become a Life-Saving Blood Donor Today
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Donating blood is one of the simplest and most impactful ways you
            can contribute to your community. It only takes a small amount of
            your time, and your donation can save up to three lives. Here’s how
            you can get involved and help make a difference.
          </p>
          <NavLink
            to="/blood-request"
            className="bg-red-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md hover:bg-red-700 transition duration-300"
          >
            Become a Donor
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default ServiceBanner;
