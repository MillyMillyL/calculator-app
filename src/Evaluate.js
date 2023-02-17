const Evaluate = ({ currentValue, operator, previousValue }) => {
  const cur = parseFloat(currentValue);
  const prev = parseFloat(previousValue);

  if (isNaN(prev) || isNaN(cur)) return "";

  let result = "";

  switch (operator) {
    case "+":
      result = prev + cur;
      break;
    case "-":
      result = prev - cur;
      break;
    case "x":
      result = prev * cur;
      break;
    case "/":
      result = prev / cur;
      break;
  }

  return result.toString();
};

export default Evaluate;
