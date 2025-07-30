import React from "react";
import Header from "../Other/Header";
import TaskNumber from "../Other/TaskNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col items-center px-6 py-8">
      
      <div className="w-full max-w-5xl mb">
        <Header changeUser={props.changeUser} data={props.data} />
      </div>
      
      <div className="w-full max-w-5xl">
        <TaskNumber data={props.data} />
      </div>
     
      <div className="w-full max-w-5xl mt-10 ">
        <span className="text-2xl font-semibold">Task List :</span>
        <TaskList data={props.data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
