import styled from "styled-components";
import Box from "./box";
import { useEffect, useState } from "react";

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 5px;
  width: 310px;
`;

const arr = [...Array(9)];

const Board = () => {
  const [userSelection, setUserSelection] = useState<number[]>([]);

  return (
    <>
      <StyledBoard>
        {arr.map((_, index) => (
          <Box {...{ input: "", setUserSelection, index }} key={index} />
        ))}
      </StyledBoard>
    </>
  );
};

export default Board;
