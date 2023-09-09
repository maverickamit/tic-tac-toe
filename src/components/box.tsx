import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface BoxProps {
  input: string;
  setUserSelection: React.Dispatch<React.SetStateAction<number[]>>;
  isUserTurn: boolean;
  setIsUserTurn: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
`;

const Box = ({
  input,
  setUserSelection,
  isUserTurn,
  setIsUserTurn,
  index,
}: BoxProps) => {
  const [selection, setSelection] = useState(input);
  useEffect(() => {
    setSelection(input);
  }, [input]);

  const handleBoxOnClick = () => {
    if (input === "" && isUserTurn) {
      setIsUserTurn(false);
      setSelection("X");
      setUserSelection((prevState: number[]) => [...prevState, index]);
    }
  };

  return (
    <>
      <StyledBox onClick={handleBoxOnClick}>{selection}</StyledBox>
    </>
  );
};

export default Box;
