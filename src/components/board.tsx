import styled from "styled-components";
import Box from "./box";

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 5px;
  width: 310px;
`;

const arr = [...Array(9)];

const Board = () => {
  return (
    <>
      <StyledBoard>
        {arr.map(() => (
          <Box input="" />
        ))}
      </StyledBoard>
    </>
  );
};

export default Board;
