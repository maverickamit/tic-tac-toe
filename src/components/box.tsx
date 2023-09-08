import styled from "styled-components";

interface BoxProps {
  input: string;
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

const Box = ({ input }: BoxProps) => {
  return (
    <>
      <StyledBox>{input}</StyledBox>
    </>
  );
};

export default Box;
