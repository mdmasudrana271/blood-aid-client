import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const DonationHistory = () => {
  const [history, setHistory] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    fetch("https://blood-aid-backend.vercel.app/dashboard/list/", {
      headers: {
        "content-type": "application/json",
        authorization: `Token ${localStorage.getItem("authToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setHistory(data);
      });
  }, []);
  console.log(history);

  return (
    <>
      <Helmet>
        <title>Donation History</title>
      </Helmet>
      <div className="lg:h-[100vh]">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Donor</th>
                <th>Recipient</th>
                <th>Event</th>
                <th>Blood Group</th>
                <th>Accept At</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {history?.map((hist) => (
                <tr key={hist.id}>
                  <td></td>
                  <td>{hist.donor}</td>
                  <td>{hist.recipient}</td>
                  <td>{hist.event}</td>
                  <td>{hist.blood_group}</td>
                  <td>{hist.accepted_at}</td>
                  {username === hist.recipient ? (
                    <td>Recieved</td>
                  ) : (
                    <td className="text-success">{hist.status}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DonationHistory;
