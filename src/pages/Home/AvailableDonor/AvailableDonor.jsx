import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import DonorCard from "./DonorCard";
import Loader from "../../../components/Spinner/Loader";

const AvailableDonor = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [address, setAddress] = useState("");
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDonors();
  }, []);

  console.log("state value: ", bloodGroup, address);

  // Fetch donors from the backend
  const fetchDonors = (bloodGroup = "", address = "") => {
    let url = `https://blood-aid-backend.vercel.app/account/available_donor/`;

    // Add blood group to the query string if provided
    if (bloodGroup) {
      url += `?blood_group=${bloodGroup}`;
    }

    // Add address to the query string if provided
    if (address) {
      url += (bloodGroup ? "&" : "?") + `address=${address}`;
    }

    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        // authorization: `Token ${localStorage.getItem("authToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setLoading(false);
          setDonors(data);
        } else {
          setLoading(false);
          setDonors([]); // Clear donors if none are found
          toast.error("No available donors found for the given criteria.");
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Failed to fetch data.");
      });
  };

  const handleFilter = () => {
    if (bloodGroup || address) {
      setLoading(true);
      fetchDonors(bloodGroup, address);
    } else {
      fetchDonors();
    }
  };

  return (
    <div className="mt-10 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h1 className="text-gray-800 text-center font-extrabold text-4xl  mb-8">
          Find Available Donors
        </h1>

        {/* Search Filters Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          {/* Blood Group Selection */}
          <select
            className="select select-bordered w-full md:w-1/3 px-4 py-2 text-lg rounded-lg border-gray-400"
            onChange={(e) => setBloodGroup(e.target.value)}
            value={bloodGroup} // Add value to keep the select in sync with state
          >
            <option value="">Select Blood Group</option>
            <option value="O%2B">O+</option>
            <option value="O-">O-</option>
            <option value="A%2B">A+</option>
            <option value="A-">A-</option>
            <option value="B%2B">B+</option>
            <option value="B-">B-</option>
            <option value="AB%2B">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          {/* Address Input */}
          <input
            type="text"
            placeholder="Enter Address"
            className="input input-bordered w-full md:w-1/3 px-4 py-2 text-lg rounded-lg border-gray-400"
            onChange={(e) => setAddress(e.target.value)}
            value={address} // Add value to keep input in sync with state
          />

          {/* Filter Button */}
          <button
            onClick={handleFilter}
            className="btn btn-error text-white w-full md:w-auto px-6 py-3 text-lg font-bold rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300"
          >
            Search
          </button>
        </div>

        {/* Donor List */}
        {loading ? (
          <Loader></Loader>
        ) : donors.length > 0 ? (
          <div className="donor-list mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {donors.map((donor) => (
              <DonorCard key={donor.id} donor={donor} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-800 text-2xl font-semibold mt-5">
            No Donors Found
          </p>
        )}
      </div>
    </div>
  );
};

export default AvailableDonor;
