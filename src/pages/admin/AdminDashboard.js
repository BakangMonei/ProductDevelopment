import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UploadVideoForm from "../../components/BroadCastorComponents/UploadVideoForm";

export const AdminDashboard = () => {

  const [showUploadForm, setShowUploadForm] = useState(false);

  const toggleUploadForm = () => {
    setShowUploadForm(!showUploadForm);
  };

  return (
    <div>
      
    </div>
  );

};

export default AdminDashboard;
