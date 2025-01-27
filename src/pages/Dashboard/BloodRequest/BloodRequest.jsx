import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const BloodRequest = () => {
  const [bloodRequest, setbloodRequest] = useState([]);

  useEffect(() => {
    fetch("https://blood-aid-backend.onrender.com/event/list/", {
      headers: {
        "content-type": "application/json",
        authorization: `Token ${localStorage.getItem("authToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const pendingRequests = data.filter(
          (request) => request.status === "pending"
        );
        setbloodRequest(pendingRequests);
      });
  }, []);
  console.log(bloodRequest);

  const handleDonation = (eventId, recipientId) => {
    const payload = {
      event_id: eventId,
      recipient_id: recipientId,
    };

    console.log(payload);
    fetch("https://blood-aid-backend.onrender.com/dashboard/create/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Token ${localStorage.getItem("authToken")}`,
      },

      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          toast.success(data.message);
          window.location.reload();
        } else {
          toast.error(data.error || "Request failed");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>All Event</title>
      </Helmet>
      <div className="lg:h-[100vh]">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Recipient</th>
                <th>Title</th>
                <th>Description</th>
                <th>Blood Group</th>
                <th>Request At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bloodRequest?.map((requ) => (
                <tr key={requ.id}>
                  <td></td>
                  <td>{requ.creator}</td>
                  <td>{requ.title}</td>
                  <td>{requ.description}</td>
                  <td>{requ.blood_group}</td>
                  {/* <td>{requ.created_at}</td> */}
                  <th>
                    {new Date(requ.created_at).toLocaleString("en-US", {
                      weekday: "long", // "Monday"
                      year: "numeric", // "2025"
                      month: "long", // "January"
                      day: "numeric", // "27"
                      hour: "numeric", // "5"
                      minute: "numeric", // "11"
                      second: "numeric", // "7"
                      hour12: true, // "AM/PM"
                    })}
                  </th>
                  <th>
                    {requ.status == "accepted" ? (
                      <p className="text-success">Accepted</p>
                    ) : (
                      <button
                        disabled={
                          localStorage.getItem("username") === requ.creator
                        }
                        onClick={() => handleDonation(requ.id, requ.creator_id)}
                        className="btn btn-error btn-xs"
                      >
                        Accept
                      </button>
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BloodRequest;
