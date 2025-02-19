export const handleInputChange = (event) => {
  let newValue = parseInt(event.target.value, 10);

  if (isNaN(newValue)) {
    newValue = 0;
  }

  if (newValue < 0) {
    newValue = 0;
  } else if (newValue > 10) {
    newValue = 10;
  }

  setInputValue(newValue.toString());
};