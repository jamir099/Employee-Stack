import React from "react";

const Header = ({ data, changeUser }) => {

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");    
    changeUser("");
   
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-semibold text-white drop-shadow">Hello {data?.name || "Admin"} !</h1>

      <button
        onClick={logOutUser}
        className="bg-red-500 text-lg font-medium text-white rounded-xl px-5 py-2"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
