import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = (props) => {
  const buttonsNames = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonsNames.map((bname) => (
        <button
          className={styles.buttons}
          onClick={() => props.OnButtonClick(bname)}
        >
          {bname}
        </button>
      ))}
      ;
    </div>
  );
};
export default ButtonsContainer;
