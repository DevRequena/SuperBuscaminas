export const handleInputChange = (event) => {
  const newValue = Math.min(10, Math.max(0, parseInt(event.target.value) || 0));
  setInputValue(newValue.toString());
};