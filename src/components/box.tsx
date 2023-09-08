import React, { useState } from "react";
import styled from "styled-components";

interface BoxProps {
  input: string;
  setUserSelection: React.Dispatch<React.SetStateAction<number[]>>;
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

const Box = ({ input, setUserSelection, index }: BoxProps) => {
  const [selection, setSelection] = useState(input);

  const handleBoxOnClick = () => {
    if (selection === "") {
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
