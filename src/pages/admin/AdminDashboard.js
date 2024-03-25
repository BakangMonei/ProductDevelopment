import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../components/NavBars/AdminNavbar";

export const AdminDashboard = () => {

  const [showUploadForm, setShowUploadForm] = useState(false);

  const toggleUploadForm = () => {
    setShowUploadForm(!showUploadForm);
  };

  return (
    <div>
      <AdminNavbar/>
    </div>
  );

};

export default AdminDashboard;
