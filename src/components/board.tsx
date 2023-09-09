import styled from "styled-components";
import Box from "./box";
import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import getInput from "../utils/getInput";
import checkWinner from "../utils/checkWinner";

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 5px;
  width: 310px;
`;

const arr = [...Array(9)];

const Board = () => {
  const [userSelection, setUserSelection] = useState<number[]>([]);
  const [computerSelection, setComputerSelection] = useState<number[]>([]);
  const [inputValues, setInputValues] = useState<string[]>(arr.map(() => "")); // Initialize with empty string values
  const [winner, setWinner] = useState<string | null>(null); // Track the winner

  useEffect(() => {
    if (userSelection.length > 0) {
      const fetchComputerSelection = async () => {
        try {
          const result = await fetchData(userSelection, computerSelection);
          if (result !== undefined) {
            setComputerSelection((prevState: number[]) => [
              ...prevState,
              result,
            ]);
          } else {
            console.log("fetchData returned undefined");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      fetchComputerSelection();
    }
  }, [userSelection]);

  useEffect(() => {
    const newInputValues = arr.map((_, index) =>
      getInput(userSelection, computerSelection, index)
    );
    setInputValues(newInputValues);

    // Check for a winner when the input values change
    const winnerResult = checkWinner(newInputValues);
    if (winnerResult == "X") {
      setWinner("User");
    } else if (winnerResult == "O") {
      setWinner("Computer");
    }
  }, [userSelection, computerSelection]);

  return (
    <>
      <StyledBoard>
        {arr.map((_, index) => (
          <Box
            {...{
              input: inputValues[index],
              setUserSelection,
              setComputerSelection,
              index,
            }}
            key={index}
          />
        ))}
      </StyledBoard>
      {winner && <div>{` ${winner} wins!`}</div>}
    </>
  );
};

export default Board;
