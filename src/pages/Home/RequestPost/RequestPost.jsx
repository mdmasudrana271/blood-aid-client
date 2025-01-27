import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const RequestPost = () => {
  const [bloodRequest, setbloodRequest] = useState([]);
  const [bloodGroup, setBloodGroup] = useState("");
  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = (bloodGroup = "") => {
    let url = `https://blood-aid-backend.onrender.com/event/bloodevents/`;
    if (bloodGroup) {
      url += `?blood_group=${bloodGroup}`;
    }

    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const pendingRequests = data.filter(
          (request) => request.status === "pending"
        );
        setbloodRequest(pendingRequests);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  // Handle filter button click
  const handleFilter = () => {
    if (bloodGroup) {
      fetchEvent(bloodGroup); // Fetch filtered donors
    } else {
      fetchEvent(); // Fetch all donors if no blood group selected
    }
  };

  return (
    <>
      <div className="my-10 p-10 bg-slate-100">
        <h1 className="text-error text-center font-bold text-3xl">
          Blood Requests
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
        {bloodRequest.length > 0 ? (
          <div className="donor-list mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {bloodRequest.map((post) => (
              <PostCard key={post._id} post={post}></PostCard>
            ))}
          </div>
        ) : (
          <p className="text-center text-error text-2xl font-semibold">
            No donors found
          </p>
        )}
      </div>
    </>
  );
};

export default RequestPost;
