import styled from "styled-components";
import Div from "./Div";
import theme from "../../themes/default";
import React from "react";
import Button from "./Button";

const Wrapper = styled(Div)`
  border: solid rgba(255, 255, 255, 0.4) 1px;
  border-radius: 200px;
  transition: border ${theme.speed.short};
  padding: 8px 8px 8px 16px;
  text-transform: capitalize;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  margin: 4px;

  &:hover {
    border: solid ${theme.palette.foreground} 1px;
    cursor: pointer;
  }
`;

const RemoveButton = styled(Button)`
  margin-left: 16px;
  font-size: 8px;
  padding: 4px;
  border: solid rgba(255, 255, 255, 0.4) 1px;
`;

interface ChipProps {
  children?: React.ReactNode | string,
  onRemove: () => void;
  onClick: () => void;
}

const Chip = ({ children, onRemove, onClick }: ChipProps) => (
  <Wrapper onClick={onClick}>
    <span>{children}</span>
    <RemoveButton type="button" round onClick={(e) => { e.stopPropagation(); onRemove(); }}>X</RemoveButton>
  </Wrapper>
);

export default Chip;