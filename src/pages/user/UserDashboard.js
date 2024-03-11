import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../../components/Profile";

export const UserDashboard = () => {
  return (
    <div>
      <p>UserDashboard</p>

      <Profile/>
    </div>
  );
};

export default UserDashboard;
