import React, { useState, useEffect } from "react";
import SuperAdminNavBar from "../../components/NavBars/SuperAdminNavBar";
// import { TableUsers } from "../../components/data"; // import TableUsers
// import { TableBroadcasters } from "../../components/data"; // import TableBroadcasters
import { LineChart, CartesianGrid, XAxis, YAxis } from "recharts"; // import from recharts
import LoginChart from "../../components/Charts/LoginChart";
import SportsWatchedChart from "../../components/Charts/SportsWatchedChart";
import StatisticsChart from "../../components/Charts/StatisticsChart";
import AdminTable from "../../components/tables/AdminTable";

export const SuperAdminDashboard = () => {
  const [admins, setAdmins] = useState([]);

  // useEffect(() => {
  //   // fetch data from Firebase
  // }, []);

  return (
    <div className="flex flex-auto p-3">
      <div>
        <SuperAdminNavBar />
      </div>

      <div className="p-3">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 xl:w-1/4 p-3">
            <LoginChart />
          </div>
        </div>

      </div>
    </div>
  );
};

export default SuperAdminDashboard;
