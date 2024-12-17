// components/Message.js
import styled from "styled-components";

export default function Message({ type, message }) {
  return (
    <StyledMessage type={type}>
      <p>{message}</p>
    </StyledMessage>
  );
}

const StyledMessage = styled.div`
  background-color: ${({ type }) => (type === "success" ? "#4caf50" : "#f44336")};
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 16px;
  p {
    margin: 0;
    color: white;
  }
`;
