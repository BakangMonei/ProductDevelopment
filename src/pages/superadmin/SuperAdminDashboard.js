import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SuperAdminNavBar from "../../components/NavBars/SuperAdminNavBar";
import UserCards from "../../components/UserCards";
import UserAnalytics from "../../components/UserAnalytics";
import Popover from "../../components/Popover";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";
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
