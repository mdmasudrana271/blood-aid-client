import PropTypes from "prop-types";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa"; // Icons for added visual appeal
import { NavLink } from "react-router-dom";

const DonorCard = ({ donor }) => {
  console.log("donorCard", donor);
  return (
    <div className="card bg-gradient-to-r from-gray-100 via-gray-200 to-white shadow-lg rounded-lg p-6 space-y-4 transition-transform transform hover:scale-105 duration-300">
      {/* Card Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center rounded-full">
          <FaUser className="text-3xl" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {donor?.user.first_name} {donor?.user.last_name}
          </h2>
          <p className="text-gray-500 text-sm">{donor?.user.username}</p>
        </div>
      </div>

      {/* Donor Information */}
      <div className="space-y-2">
        <p className="flex items-center text-gray-700 text-sm">
          <FaEnvelope className="mr-2 text-blue-500" />
          <span className="font-semibold">Email:</span> {donor?.user.email}
        </p>
        <p className="flex items-center text-gray-700 text-sm">
          <FaMapMarkerAlt className="mr-2 text-green-500" />
          <span className="font-semibold">Address:</span> {donor?.address}
        </p>
        <p className="flex items-center text-gray-700 text-sm">
          <span className="font-semibold">Last Donation Date:</span>{" "}
          {donor?.last_donation_date}
        </p>
      </div>

      {/* Blood Group and Button */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-gray-800">
          Blood Group: {donor?.blood_group}
        </span>
        <NavLink
          to={`/donor_details/${donor.id}`}
          className="btn bg-red-600 hover:bg-red-700 text-white text-sm flex items-center gap-2 py-2 px-4 rounded"
        >
          <FaHeart /> Contact
        </NavLink>
      </div>
    </div>
  );
};

DonorCard.propTypes = {
  donor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    blood_group: PropTypes.string.isRequired,
    age: PropTypes.number,
    address: PropTypes.string.isRequired,
    is_available_for_donation: PropTypes.bool.isRequired,
    last_donation_date: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DonorCard;
