import React from "react";
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

const Box = React.memo(
  ({ input, setUserSelection, isUserTurn, setIsUserTurn, index }: BoxProps) => {
    const handleBoxOnClick = () => {
      if (input === "" && isUserTurn) {
        setIsUserTurn(false);
        setUserSelection((prevState: number[]) => [...prevState, index]);
      }
    };

    return (
      <>
        <StyledBox onClick={handleBoxOnClick}>{input}</StyledBox>
      </>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.input === nextProps.input &&
      prevProps.isUserTurn === nextProps.isUserTurn
    );
  }
);

export default Box;
