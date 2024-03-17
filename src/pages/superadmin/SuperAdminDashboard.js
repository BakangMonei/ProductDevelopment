import React, { useState, useEffect } from "react";
import SuperAdminNavBar from "../../components/NavBars/SuperAdminNavBar";
import TableUsers from "../../components/data/TableUsers";
import TableBroadcasters from "../../components/data/TableBroadcasters";

export const SuperAdminDashboard = () => {
  return (
    <div className="flex flex-auto p-3">
      <div>
        <SuperAdminNavBar />
      </div>

      <div className="p-3">
        <TableUsers/>
        <TableBroadcasters/>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
