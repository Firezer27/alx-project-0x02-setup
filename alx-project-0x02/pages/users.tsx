
import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Users Page</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;


export async function getStaticProps() {
  const res = await fetch("");
  const data = await res.json();

  const formattedUsers: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }));

  return {
    props: {
      users: formattedUsers,
    },
  };
}
