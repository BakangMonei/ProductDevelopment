import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../components/NavBars/AdminNavbar";
import PostNewBroadcast from "../../components/BroadCastorComponents/PostNewBroadcast";
import EditBroadcast from "../../components/BroadCastorComponents/EditBroadcast";
import ViewAvailableBroadcasts from "../../components/BroadCastorComponents/ViewAvailableBroadcasts";
import RemoveTransmissions from "../../components/BroadCastorComponents/RemoveTransmissions";
import SearchBroadcasts from "../../components/BroadCastorComponents/SearchBroadcasts";
import SortByCategory from "../../components/BroadCastorComponents/SortByCategory";
import CheckMetrics from "../../components/BroadCastorComponents/CheckMetrics";
import ReviewBroadcastLogs from "../../components/BroadCastorComponents/ReviewBroadcastLogs";
import VerifyIdentification from "../../components/BroadCastorComponents/VerifyIdentification";
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
      <div className="grid grid-cols-2 gap-4 p-4">
        {/* Add your components here */}
        <PostNewBroadcast />
        <WebLogs/>
      </div>
    </div>
  );
};

export default AdminDashboard;
