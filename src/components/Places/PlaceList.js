import React from "react";
import Card from "../UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";
import Button from "../FormElements/Button";
const PlaceList = (props) => {
  const style = {
    padding: "2rem",
  };
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card style={style}>
          <h2>No Places Found.</h2>
          <Button to="/places/new"> share a place</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.imageURL}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
          ></PlaceItem>
        );
      })}
    </ul>
  );
};

export default PlaceList;
