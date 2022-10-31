import React, { useEffect, useState } from "react";
import Input from "../components/FormElements/Input";
import Button from "../components/FormElements/Button";
import Card from "../components/UIElements/Card";
import "./PlaceForm.css";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../Utils/validators";
import { useParams } from "react-router-dom";
import { useForm } from "../hooks/formHooks";
const cardStyle = {
  margin: "100px auto 0",
  width: "20%",
  height: "100px",
};
const temp = [
  {
    id: "1",
    title: "empty",
    description: "one of the most famous skyscraper in the world",
    imageURL: "https://media.timeout.com/images/101705309/750/422/image.jpg",
    address: "1231232",
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

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const [loading, setLoading] = useState(true);
  const [state, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const current_place = temp.find((place) => {
    return place.id === placeId;
  });
  //triggers after we fetch from backend`
  useEffect(() => {
    if (current_place) {
      setFormData(
        {
          title: {
            value: current_place.title,
            isValid: true,
          },
          description: {
            value: current_place.description,
            isValid: true,
          },
        },
        true
      );
    }
    setLoading(false);
  }, [setFormData, current_place]);

  if (!current_place) {
    return (
      <Card style={cardStyle}>
        <h2 className="center">Could not find place</h2>
      </Card>
    );
  }
  const submitHandler = (e) => {
    e.preventDefault();
    // todo
    // send to server
    console.log(state.inputs);
  };
  if (loading) {
    return <h2 className="center">Loading...</h2>;
  }
  return (
    <form className="place-form" onSubmit={submitHandler}>
      <Input
        id="title"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        element="input"
        onInput={inputHandler}
        errorMessage="Please enter a valid title."
        initialValue={state.inputs.title.value}
        initialValid={state.inputs.title.isValid}
      ></Input>
      <Input
        id="description"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        element="textarea"
        onInput={inputHandler}
        errorMessage="Please enter a valid description of minimum 5 characters."
        // fetch value and valid from backend TODO
        initialValue={state.inputs.description.value}
        initialValid={state.inputs.description.isValid}
      ></Input>
      <Button type="submit" disabled={!state.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
