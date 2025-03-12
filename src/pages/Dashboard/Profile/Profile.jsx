import { FaUserEdit } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import Loader from "../../../components/Spinner/Loader";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const donor_id = localStorage.getItem("donor_id");
  const [history, setHistory] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    setLoading(true);
    fetch(`https://blood-aid-backend.vercel.app/account/list/${donor_id}/`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Token ${localStorage.getItem("authToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      });
  }, [donor_id]);

  useEffect(() => {
    fetch("https://blood-aid-backend.vercel.app/dashboard/list/", {
      headers: {
        "content-type": "application/json",
        authorization: `Token ${localStorage.getItem("authToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("history data: ", data);
        setHistory(data);
      });
  }, []);
  console.log("history", history);

  console.log(profile);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="container mx-auto px-4 py-10 mt-16">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-6 border border-red-200">
        {/* Profile Header */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 border-b pb-4">
          {/* Profile Picture Placeholder */}
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white text-3xl font-semibold">
            {profile.user?.first_name?.charAt(0)}
          </div>
          {/* User Details */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800">
              {profile.user?.first_name} {profile.user?.last_name}
            </h2>
            <p className="text-gray-600">{profile.user?.username}</p>
            <p className="text-gray-600">{profile.user?.email}</p>
            <p className="text-gray-600">
              Blood Group:{" "}
              <span className="font-semibold text-red-500">
                {profile.blood_group}
              </span>
            </p>
          </div>
          {/* Edit Button */}
          <NavLink
            to="/update_profile"
            className="ml-auto flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            <FaUserEdit className="mr-2" />
            Edit Profile
          </NavLink>
        </div>

        {/* User Information Section */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name and Email */}
          <div className=" p-4 rounded shadow-md">
            <p className="text-gray-700 font-semibold">Name</p>
            <p className="text-gray-600">
              {profile.user?.first_name} {profile.user?.last_name}
            </p>
          </div>
          <div className=" p-4 rounded shadow-md">
            <p className="text-gray-700 font-semibold">Email</p>
            <p className="text-gray-600">{profile.user?.email}</p>
          </div>

          {/* Phone and Blood Group */}
          <div className="p-4 rounded shadow-md">
            <p className="text-gray-700 font-semibold">Phone</p>
            <p className="text-gray-600">{profile.phone}</p>
          </div>
          <div className=" p-4 rounded shadow-md">
            <p className="text-gray-700 font-semibold">Address</p>
            <p className="text-gray-600">{profile.address}</p>
          </div>
          <div className=" p-4 rounded shadow-md">
            <p className="text-gray-700 font-semibold">Age</p>
            <p className="text-gray-600">{profile.age}</p>
          </div>
          {profile.is_available_for_donation ? (
            <>
              <div className=" p-4 rounded shadow-md">
                <p className="text-gray-700 font-semibold">Status</p>
                <p className="text-gray-600">Available for Donation</p>
              </div>
            </>
          ) : (
            <>
              <div className=" p-4 rounded shadow-md">
                <p className="text-gray-700 font-semibold">Status</p>
                <p className="text-gray-600">Not Available for Donation</p>
              </div>
            </>
          )}
        </div>

        {/* Donation Details */}
        <div className="mt-6 bg-red-100 p-6 border border-red-300 rounded-lg text-center">
          <MdBloodtype className="text-red-600 text-4xl mx-auto mb-2" />
          <p className="text-red-700 font-semibold text-lg">
            Last Donation Date:{" "}
            <span className="font-bold">{profile.last_donation_date}</span>
          </p>
          <p className="text-red-700 font-semibold text-lg">
            Total Donations:{" "}
            <span className="font-bold">
              {history?.length ? history.length : 0}
            </span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center space-x-6">
          <NavLink
            to="/blood-request"
            className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition text-lg font-semibold flex items-center"
          >
            <MdBloodtype className="mr-2 text-xl" />
            Donate Now
          </NavLink>
          <NavLink
            to="/create-events"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition text-lg font-semibold flex items-center"
          >
            <AiOutlinePlus className="mr-2 text-xl" />
            Create Event
          </NavLink>
        </div>

        {/* Donation History as Cards */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Donation History
          </h3>
          <div className="space-y-4">
            {history.length > 0 ? (
              history?.map((donation) => (
                <div
                  key={donation.id}
                  className="bg-gray-100 p-4 rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex justify-between">
                    <p className="text-gray-700 font-semibold text-lg">
                      {new Date(donation.accepted_at).toLocaleString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </p>
                    <p className="text-red-600 font-semibold text-lg">
                      {username === donation.recipient ? (
                        <span>Recieved</span>
                      ) : (
                        <span className="text-success">{donation.status}</span>
                      )}
                    </p>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Recipient:{" "}
                    <span className="font-semibold">{donation.recipient}</span>
                  </p>
                  <p className="text-gray-600 mt-2">
                    Donor:{" "}
                    <span className="font-semibold">{donation.donor}</span>
                  </p>
                  <p className="text-gray-600 mt-2">
                    Blood Group:{" "}
                    <span className="font-semibold">
                      {donation.blood_group}
                    </span>
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No donation history available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
