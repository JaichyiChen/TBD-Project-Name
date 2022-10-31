import React, { useReducer, useEffect } from "react";
import "./Input.css";
import { validate } from "../../Utils/validators";
//useReducer setup
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isFocused: true,
      };
    default:
      return state;
  }
};
const Input = (props) => {
  const {
    type,
    label,
    validators,
    id,
    element,
    placeholder,
    rows,
    onInput,
    errorMessage,
    initialValue,
    initialValid,
  } = props;
  //initial state
  const [state, dispatch] = useReducer(reducer, {
    value: initialValue || "",
    isFocused: false,
    isValid: initialValid || false,
  });

  useEffect(() => {
    onInput(id, state.value, state.isValid);
  }, [id, state.value, state.isValid, onInput]);

  const changeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      value: e.target.value,
      validators: validators,
    });
  };
  const focusHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const textInput =
    element === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={state.value}
        onBlur={focusHandler}
        onChange={changeHandler}
      ></input>
    ) : (
      <textarea
        id={id}
        row={rows || 3}
        value={state.value}
        onBlur={focusHandler}
        onChange={changeHandler}
      ></textarea>
    );

  return (
    <div
      className={`form-control ${
        !state.isValid && state.isFocused && "form-control--invalid"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {textInput}
      {!state.isValid && state.isFocused && <p>{errorMessage}</p>}
    </div>
  );
};

export default Input;
