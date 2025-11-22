import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>

      <p className="text-gray-700 mb-1">
        <span className="font-medium">Email:</span> {email}
      </p>

      <p className="text-gray-700">
        <span className="font-medium">Address:</span> {address.street},{" "}
        {address.city}
      </p>
    </div>
  );
};

export default UserCard;
