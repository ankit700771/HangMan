export default function Button({
  text,
  onClickHandler,
  styles,
  type = "button",
}) {
  return (
    <button className={styles} type={type} onClick={onClickHandler}>
      {text}
    </button>
  );
}
