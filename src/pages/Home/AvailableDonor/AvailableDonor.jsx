import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import DonorCard from "./DonorCard";

const AvailableDonor = () => {
  const [bloodGroup, setBloodGroup] = useState(""); // State to store the selected blood group
  const [donors, setDonors] = useState([]); // State to store filtered donors

  // Fetch all donors when the component mounts
  useEffect(() => {
    fetchDonors();
  }, []);

  // Fetch donors from the backend
  const fetchDonors = (bloodGroup = "") => {
    let url = `https://blood-aid-backend.vercel.app/account/available_donor/`;
    if (bloodGroup) {
      url += `?blood_group=${bloodGroup}`;
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
          setDonors(data);
        } else {
          setDonors([]); // Clear donors if none are found
          toast.error("No available donors found for this blood group.");
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Failed to fetch data.");
      });
  };

  // Handle blood group change
  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  // Handle filter button click
  const handleFilter = () => {
    if (bloodGroup) {
      fetchDonors(bloodGroup); // Fetch filtered donors
    } else {
      fetchDonors(); // Fetch all donors if no blood group selected
    }
  };

  return (
    <div className="my-10 p-10 bg-slate-100">
      <h1 className="text-error text-center font-bold text-3xl">
        Available Donors
      </h1>
      <div className="join">
        <select
          className="select select-bordered join-item"
          //   value={bloodGroup}
          onChange={handleBloodGroupChange}
        >
          <option disabled selected>
            Blood Group
          </option>
          <option value="O%2B">O+</option>
          <option value="O-">O-</option>
          <option value="A%2B">A+</option>
          <option value="A-">A-</option>
          <option value="B%2B">B+</option>
          <option value="B-">B-</option>
          <option value="AB%2B">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <div className="indicator">
          <button onClick={handleFilter} className="btn btn-error join-item">
            Filter
          </button>
        </div>
      </div>
      {donors.length > 0 ? (
        <div className="donor-list mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {donors.map((donor) => (
            <DonorCard key={donor.id} donor={donor}></DonorCard>
          ))}
        </div>
      ) : (
        <p className="text-center text-error text-2xl font-semibold">
          No Donors Found
        </p>
      )}
    </div>
  );
};

export default AvailableDonor;
