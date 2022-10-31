import React, { useCallback, useReducer } from "react";
import "./PlaceForm.css";
import Input from "../components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../Utils/validators";
import Button from "../components/FormElements/Button";
import { useForm } from "../hooks/formHooks";

const NewPlace = () => {
  const [state, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (e) => {
    e.preventDefault();
    // todo
    // send to server
    console.log(state.inputs);
  };

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
      ></Input>
      <Input
        id="description"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        element="textarea"
        onInput={inputHandler}
        errorMessage="Please enter a valid description of minimum 5 characters."
      ></Input>
      <Input
        id="address"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        element="input"
        onInput={inputHandler}
        errorMessage="Please enter a valid address."
      ></Input>
      <Button type="submit" disabled={!state.isValid}>
        Add Place
      </Button>
    </form>
  );
};

export default NewPlace;
