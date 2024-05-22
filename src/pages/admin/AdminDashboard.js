import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../components/NavBars/AdminNavbar";
import PostNewBroadcast from "../../components/BroadCastorComponents/PostNewBroadcast";
import SportsCard from "../../components/Cards/SportsCard";
import WebLogs from "../../components/Forms/WebLogs";

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

      <div>
        <div className="grid grid-cols-2 gap-4 p-4">
          {/* Add your components here */}
          <div className="">
            <PostNewBroadcast />
          </div>
          <div>
            <WebLogs />
          </div>
        </div>

        <div>
          <SportsCard />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
