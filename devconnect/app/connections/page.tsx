import React from "react";
import PeopleList from "@/app/components/connections/PeopleList"; // Adjust the path based on your structure
import ProfileList from "../components/connections/ProfileList";

const Connection = () => {
  return (
    <div className="p-6">
      <PeopleList />
      <ProfileList /> 
    </div>
  );
};

export default Connection;
