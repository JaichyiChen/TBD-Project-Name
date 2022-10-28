import React, { useCallback, useReducer } from "react";
import "./Newplace.css";
import Input from "../components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../Utils/validators";
import Button from "../components/FormElements/Button";
const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      //updating formIsValid based on the input that is being changed
      for (const inputId in state.inputs) {
        if (inputId === action.InputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      //update the state in NewPlace based on the state in Input.js
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

//useCallback to prevent infinite rerender, this function is used as dependency in input.js
const NewPlace = () => {
  const [state, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

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
