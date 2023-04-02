import React, { useState, useEffect } from "react";
import UserTable from "../pages/UserTable";




const MangerUserMenu = () => {
  

  return (
    <div>
      <div>
        <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
      </div>


    </div>
  );
};

export default MangerUserMenu;
