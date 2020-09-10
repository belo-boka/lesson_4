import Button from "./button";
import styled from "styled-components";

export default styled(Button)`
  width: 30px;
  background-color: ${(props) => (props.red ? "red" : "green")};
`;
