import React from "react";
import UserItem from "./UserItem";
import Card from "./UIElements/Card";
import "./UserList.css";
const UserList = (props) => {
  const { items } = props;
  if (items.length === 0) {
    const style = {
      width: "50%",
      height: "50%",
      marginLeft: "auto",
      marginRight: "auto",
    };
    return (
      <Card className="center" style={style}>
        <h2>No users found.</h2>
      </Card>
    );
  }
  return (
    <ul className="users-list">
      {items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
