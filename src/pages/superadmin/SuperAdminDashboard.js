import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SuperAdminNavBar from "../../components/NavBars/SuperAdminNavBar";
import UserCards from "../../components/Cards/UserCards";
import UserAnalytics from "../../components/Cards/UserAnalytics";
import Popover from "../../components/Popover/Popover";
import SearchBar from "../../components/Search/SearchBar";
import Footer from "../../components/Footer/Footer";
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
