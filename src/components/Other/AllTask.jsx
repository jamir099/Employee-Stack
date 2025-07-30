import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#2c2c2c] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="bg-gradient-to-r from-emerald-500 to-green-400 text-black mb-4 py-3 px-4 flex justify-between rounded-md font-semibold tracking-wide">
        <h2 className="w-1/5 text-center">Employee Name</h2>
        <h3 className="w-1/5 text-center">Pending Task</h3>
        <h5 className="w-1/5 text-center">Completed</h5>
        <h5 className="w-1/5 text-center">Failed</h5>
      </div>

      <div className="space-y-3">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="bg-[#1f1f1f] border border-emerald-500 p-3 flex justify-between items-center rounded-lg hover:scale-[1.02] transition-transform duration-200"
          >
            <h2 className="w-1/5 text-center text-white font-medium">
              {elem.name}
            </h2>
            <h5 className="w-1/5 text-center text-yellow-300 font-semibold">
              {elem.task_count.pending}
            </h5>
            <h5 className="w-1/5 text-center text-green-400 font-semibold">
              {elem.task_count.completed}
            </h5>
            <h5 className="w-1/5 text-center text-red-400 font-semibold">
              {elem.task_count.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
