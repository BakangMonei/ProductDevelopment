import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../components/NavBars/AdminNavbar";

export const AdminDashboard = () => {

  const [showUploadForm, setShowUploadForm] = useState(false);

  const toggleUploadForm = () => {
    setShowUploadForm(!showUploadForm);
  };

  return (
    <div className="flex flex-auto p-3">
      <div>
        <AdminNavbar />
      </div>
    </div>
  );

};

export default AdminDashboard;
