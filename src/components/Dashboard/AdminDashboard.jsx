import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-full min-h-screen w-full p-8 bg-gradient-to-tr from-[#1c1c1c] to-[#2a2a2a] text-white font-sans">
      <div className="max-w-6xl mx-auto">
        <Header changeUser={props.changeUser} data={props.data} />

        <div className="mt-8">
          <CreateTask />
        </div>

        <div className="mt-10">
          <AllTask />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
