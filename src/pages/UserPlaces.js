import React from "react";
import PlaceList from "../components/Places/PlaceList";
import { useParams } from "react-router";
const temp = [
  {
    id: "1",
    title: "empty",
    description: "one of the most famous skyscraper in the world",
    imageURL: "https://media.timeout.com/images/101705309/750/422/image.jpg",
    address: "123123",
    creator: "123123",
    location: { lat: +40.7484, lng: -73.9857 },
  },
  {
    id: "2",
    title: "empty2",
    description: "one of the most famous skyscraper in the world",
    imageURL: "https://media.timeout.com/images/101705309/750/422/image.jpg",
    address: "123123",
    creator: "123123",
    location: { lat: +40.7484, lng: -73.9857 },
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = temp.filter((item) => item.creator === userId);
  return <PlaceList items={loadedPlaces}></PlaceList>;
};

export default UserPlaces;
