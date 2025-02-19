export const generateCellValue = (maxValue) => {
  if (Math.random() < 0.4) {
    return 0;
  } else {
    return Math.floor(Math.random() * (maxValue + 1));
  }
};