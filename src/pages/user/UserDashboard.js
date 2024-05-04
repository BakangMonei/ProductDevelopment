import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../../components/Forms/Profile";
import Sidebar from "../../components/sidebar/SideBar";
import SportsCard from "../../components/Cards/SportsCard";

export const UserDashboard = () => {
  return (
    <div className="flex flex-auto">


    <SportsCard/>
    </div>
  );
};

export default UserDashboard;
