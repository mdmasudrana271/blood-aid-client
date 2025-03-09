import { useEffect, useState } from "react";
import {
  MdBloodtype,
  MdCalendarToday,
  MdEmail,
  MdLocationOn,
  MdPhone,
} from "react-icons/md";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Spinner/Loader";

const DonorDetails = () => {
  //   const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const [donorData, setDonorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [donorLoading, setDonorLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://blood-aid-backend.vercel.app/account/list/${id}/`, {
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
  }, [id]);

  useEffect(() => {
    if (profile?.user?.id) {
      // Check if profile.user exists before accessing its properties
      setDonorLoading(true);
      fetch(
        `https://blood-aid-backend.vercel.app/dashboard/donor-donation-history/?donor_id=${profile.user.id}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Token ${localStorage.getItem("authToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setDonorData(data);
          setDonorLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching donor history:", error);
          setDonorLoading(false);
        });
    }
  }, [profile?.user?.id]); // Ensure profile.user is defined before using id

  console.log("profile", profile);
  if (loading || donorLoading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-4 py-10 mt-28">
      {/* Donor Profile Section */}
      <div className="relative bg-gradient-to-r from-red-500 to-red-700 text-white p-10 rounded-2xl shadow-lg max-w-4xl mx-auto">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full border-4 border-red-500 flex items-center justify-center shadow-lg">
          <MdBloodtype className="text-red-600 text-5xl" />
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold">
            {profile.user.first_name} {profile.user.last_name}
          </h2>
          <p className="text-lg text-gray-200">
            {profile.blood_group} Blood Donor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Left Column */}
          <div className="flex items-center space-x-3">
            <MdEmail className="text-2xl" />
            <div>
              <p className="text-sm text-gray-300">Email</p>
              <p className="text-lg">{profile.user.email}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MdPhone className="text-2xl" />
            <div>
              <p className="text-sm text-gray-300">Phone</p>
              <p className="text-lg">{profile.phone}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MdLocationOn className="text-2xl" />
            <div>
              <p className="text-sm text-gray-300">Location</p>
              <p className="text-lg">{profile.address}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MdCalendarToday className="text-2xl" />
            <div>
              <p className="text-sm text-gray-300">Age</p>
              <p className="text-lg">{profile.age} Years</p>
            </div>
          </div>
        </div>

        {/* Extra Info */}
        <div className="flex justify-between items-center mt-8 border-t border-gray-300 pt-4">
          <div>
            <p className="text-sm text-gray-300">Total Donations</p>
            <p className="text-xl font-bold">
              {donorData.length > 0 ? donorData.length : 0}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Last Donation Date</p>
            <p className="text-xl font-bold">{profile.last_donation_date}</p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Availability</p>
            <p
              className={`text-xl font-bold ${
                profile.is_available_for_donation
                  ? "text-green-300"
                  : "text-red-300"
              }`}
            >
              {profile.is_available_for_donation
                ? "Available"
                : "Not Available"}
            </p>
          </div>
        </div>
      </div>

      {/* Donation History Section (Kept the same) */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Donation History
        </h3>
        <div className="space-y-4">
          {Array.isArray(donorData) && donorData.length > 0 ? (
            donorData.map((donation) => (
              <div
                key={donation.id}
                className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-2xl shadow-xl border border-gray-300 transition-transform transform hover:scale-105 duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-600 text-sm">
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
                  <span
                    className={`px-4 py-2 text-xs font-semibold rounded-full bg-green-200 text-green-800`}
                  >
                    {donation.status}
                  </span>
                </div>

                <div className="bg-gradient-to-r from-red-50 via-red-100 to-red-200 p-5 rounded-lg border-l-4 border-red-600 shadow-lg">
                  <h3 className="text-xl font-semibold text-red-800">
                    Blood Donation
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Event:{" "}
                    <span className="font-semibold text-gray-800">
                      {donation.event}
                    </span>
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-gray-700 flex items-center gap-3">
                    <span className="text-gray-500 font-medium">
                      Recipient:
                    </span>
                    <span className="font-semibold text-gray-800">
                      {donation.recipient}
                    </span>
                  </p>

                  <p className="text-gray-700 flex items-center gap-3 mt-3">
                    <span className="text-gray-500 font-medium">
                      Blood Group:
                    </span>
                    <span className="font-semibold text-red-600">
                      {donation.blood_group}
                    </span>
                  </p>
                </div>
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
  );
};

export default DonorDetails;
