import { NavLink, Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div>
      <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-error text-white">
          <ul className="menu p-4">
            <>
              <li>
                <NavLink to="/dashboard/update_profile">Update Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/events">Create Event</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/request">All Events</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">Donation History</NavLink>
              </li>
            </>
            {/* shared nav links */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
