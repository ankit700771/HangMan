import { useNavigate } from "react-router-dom";
import TextInputForm from "./TextInputForm";
import { useState } from "react";

function TextInputFormContainer() {
  const [password, setPassword] = useState(true);
  const [values, setValues] = useState("");

  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted");
    if (values) {
      navigate("/play", { state: { wordSelected: values } });
    }
  }

  function handleChangeInput(event) {
    setValues(event.target.value);
  }

  function handleShowHideClick() {
    setPassword((prev) => !prev);
  }

  return (
    <TextInputForm
      inputType={password}
      value={values}
      handleFormSubmit={handleFormSubmit}
      handleChangeInput={handleChangeInput}
      handleShowHideClick={handleShowHideClick}
    />
  );
}

export default TextInputFormContainer;
