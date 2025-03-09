import { useState, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Campaign = () => {
  const [campaignHistory, setCampaignHistory] = useState([]);

  // Fetch data from the backend (simulate fetching for now)
  useEffect(() => {
    // Example data for the campaign history
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          title: "Save Life Campaign 2023",
          description:
            "A blood donation campaign aimed at helping people affected by emergencies and surgeries. Join us to make a difference.",
          date: "2023-05-15",
        },
        {
          id: 2,
          title: "Donate Blood, Save Lives 2022",
          description:
            "A nationwide campaign to encourage blood donation among young adults. Together, we can save lives.",
          date: "2022-11-20",
        },
        {
          id: 3,
          title: "Blood Donation Drive 2021",
          description:
            "A local initiative to collect blood donations for hospitals during a crisis period. Your donation can save lives.",
          date: "2021-08-10",
        },
      ];

      setCampaignHistory(data);
    };

    fetchData();
  }, []);

  return (
    <div className="my-10 p-10 bg-gray-100">
      <h1 className="text-center font-bold text-3xl text-red-600 mb-6">
        Our Blood Donation Campaigns
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaignHistory.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            {/* Title and Date */}
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {campaign.title}
              </h2>
              <p className="text-sm text-gray-600 flex items-center mt-2">
                <FaRegCalendarAlt className="mr-2 text-red-600" />
                {campaign.date}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-4">{campaign.description}</p>

            {/* Learn More Button */}
            <NavLink
              to="/blood-request"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-200"
            >
              Donate
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaign;
