const getInput = (
  userSelection: (number | null)[],
  computerSelection: (number | null)[],
  index: number
): string => {
  for (let i = 0; i < userSelection.length; i++) {
    if (userSelection[i] == index) {
      return "X";
    }
  }
  for (let i = 0; i < computerSelection.length; i++) {
    if (computerSelection[i] == index) {
      return "O";
    }
  }
  return "";
};

export default getInput;
