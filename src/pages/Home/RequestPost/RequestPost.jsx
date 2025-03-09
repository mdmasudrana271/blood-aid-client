import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import Loader from "../../../components/Spinner/Loader";
import { NavLink } from "react-router-dom";

const RequestPost = () => {
  const [bloodRequest, setBloodRequest] = useState([]);
  const [bloodGroup, setBloodGroup] = useState("");
  const [address, setAddress] = useState(""); // State for address search
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = (bloodGroup = "", address = "") => {
    setLoading(true);
    let url = `https://blood-aid-backend.vercel.app/event/bloodevents/`;

    if (bloodGroup) {
      url += `?blood_group=${bloodGroup}`;
    }

    // Add address filter if it's provided
    if (address) {
      const separator = bloodGroup ? "&" : "?";
      url += `${separator}address=${address}`;
    }

    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBloodRequest(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };

  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value); // Handle address change
  };

  const handleFilter = () => {
    if (bloodGroup || address) {
      setLoading(true);
      fetchEvent(bloodGroup, address);
    } else {
      fetchEvent();
    }
  };

  const handleCreateEvent = () => {
    console.log("Create Event Button Clicked");
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Title and Create Event Button Container */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-start md:text-center text-3xl font-extrabold text-gray-800 w-full md:w-auto">
            Blood Donation Requests
          </h1>
          <NavLink
            to="/create-events"
            onClick={handleCreateEvent} // Handle the click event of the "Create Event" button
            className="bg-gradient-to-r from-red-500 to-red-700 text-white px-2 py-2 text-sm md:text-lg font-semibold rounded-lg shadow-xl hover:bg-red-800 transition-all duration-300 transform hover:scale-105"
          >
            Create Event
          </NavLink>
        </div>

        {/* Filter Section */}
        <div className="bg-white p-8 rounded-lg shadow mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6 w-full">
              {/* Blood Group Dropdown */}
              <select
                className="select select-bordered w-full md:w-1/2 px-4 py-2 text-lg rounded-lg border-gray-300 shadow-sm"
                onChange={handleBloodGroupChange}
                value={bloodGroup}
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
                className="input input-bordered w-full md:w-1/2 px-4 py-2 text-lg rounded-lg border-gray-300 shadow-sm"
                placeholder="Search by Address"
                value={address}
                onChange={handleAddressChange}
              />

              {/* Filter Button */}
              <button
                onClick={handleFilter}
                className="btn bg-gradient-to-r from-red-500 to-red-700 text-white w-auto px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-red-800 transition-all duration-300 transform hover:scale-105"
              >
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Loading Indicator */}
        {loading ? (
          <Loader />
        ) : (
          <>
            {bloodRequest.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {bloodRequest.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <p className="text-center text-xl text-gray-600 mt-5">
                No Blood Requests Found
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default RequestPost;
