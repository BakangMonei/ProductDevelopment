import React, { useState, useEffect } from "react";
import SuperAdminNavBar from "../../components/NavBars/SuperAdminNavBar";
// import { TableUsers } from "../../components/data"; // import TableUsers
// import { TableBroadcasters } from "../../components/data"; // import TableBroadcasters
import { LineChart, CartesianGrid, XAxis, YAxis } from "recharts"; // import from recharts
import LoginChart from "../../components/Charts/LoginChart";
import PostNewBroadcast from "../../components/BroadCastorComponents/PostNewBroadcast";
import SportsCard from "../../components/Cards/SportsCard";
import WebLogs from "../../components/Forms/WebLogs";

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

      <div>
        <div className=" gap-4 p-4">
          {/* Add your components here */}
          
            <WebLogs />
       
        </div>
        
        
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
