import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const tempUser = [
    {
      id: "123123",
      image:
        "https://unsplash.com/blog/content/images/max/2560/1-qaQ4d2jUVh2mTh99ijuS0A.jpeg",
      name: "ben",
      places: 5,
    },
  ];
  return <UserList items={tempUser}></UserList>;
};

export default Users;
