import PropTypes from "prop-types";

import bg from "../../../assets/home/home3.jpg";

const DonorCard = ({ donor }) => {
  return (
    <>
      <div className="card bg-base-100 image-full shadow-xl">
        <figure>
          <img src={bg} alt="Donor card bg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {donor?.user.first_name} {donor?.user.last_name}
          </h2>
          <p>{donor?.user.email}</p>
          <p>
            <span className="font-extrabold">Address:</span> {donor?.address}
          </p>
          <p>
            <span className="font-extrabold">Last donation date:</span>{" "}
            {donor?.last_donation_date}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-error cursor-text">
              Blood group {donor.blood_group}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

DonorCard.propTypes = {
  donor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    blood_group: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
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
