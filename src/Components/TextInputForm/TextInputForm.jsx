import TextInput from "../TextInput/TextInput.jsx";
import Button from "../Button/Button.jsx";

function TextInputForm({
  inputType,
  value,
  handleFormSubmit,
  handleChangeInput,
  handleShowHideClick,
}) {
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          {/* text Input */}
          <TextInput
            type={inputType ? "password" : "text"}
            label={"Enter some text"}
            placeholder="Enter a word here ..."
            value={value}
            onChangeHandler={handleChangeInput}
          />
        </div>

        {/* Button logic */}
        <div>
          <Button
            text={inputType ? "ShowText" : "HideText"}
            onClickHandler={handleShowHideClick}
            styles="text-white bg-blue-500 border py-2 px-5 rounded-md"
          />
        </div>
        <div>
          <Button
            text="Start"
            onClickHandler={() => console.log("Click me")}
            styles="text-white bg-red-500 border py-2 px-5 rounded-md"
            type="Submit"
          />
        </div>
      </form>
    </>
  );
}

export default TextInputForm;
