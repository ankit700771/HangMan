import TextInputForm from "./TextInputForm";
import { useState } from "react";

function TextInputFormContainer() {
  const [password, setPassword] = useState(true);
  const [values, setValues] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted");
  }

  function handleChangeInput(event) {
    setValues(event.target.value);
  }

  function handleShowHideClick() {
    setPassword((prev) => !prev);
  }

  return (
    <TextInputForm
      inputType={password ? "password" : "text"}
      text={password ? "ShowText" : "HideText"}
      value={values}
      handleFormSubmit={handleFormSubmit}
      handleChangeInput={handleChangeInput}
      handleShowHideClick={handleShowHideClick}
    />
  );
}

export default TextInputFormContainer;
