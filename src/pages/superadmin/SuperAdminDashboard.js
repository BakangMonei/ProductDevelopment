import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SuperAdminNavBar from "../../components/SuperAdminNavBar";
import UserCards from "../../components/UserCards";
import UserAnalytics from "../../components/UserAnalytics";
import Popover from "../../components/Popover";
import SearchBar from "../../components/SearchBar";

export const SuperAdminDashboard = () => {
  return (
    <div className="flex flex-auto p-3">
      
      <div>
        <SuperAdminNavBar />
      </div>

      
      {/* People and website Analytics */}
      
      <div className="p-10 space-y-5">
        <div >
          <UserCards />
        </div>

        <div >
          <UserAnalytics />
        </div>
      </div>

      {/* Create Admins Forms*/}
      <div className="p-10 space-y-5">
            <div>
                <Popover/>
            </div>
        </div>
    </div>
  );
};

export default SuperAdminDashboard;
