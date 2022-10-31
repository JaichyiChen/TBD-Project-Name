import React from "react";
import "./UserItem.css";
import Avatar from "../components/UIElements/Avatar";
import Card from "./UIElements/Card";
import { Link } from "react-router-dom";
const UserItem = (props) => {
  const { id, image, placeCount, name } = props;
  const cardStyle = {
    padding: "0",
  };
  return (
    <li className="user-item">
      <Card className="user-item__content" style={cardStyle}>
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar image={image} alt={name}></Avatar>
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
