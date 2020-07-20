import styled from "styled-components";
import Div from "../atoms/Div";
import theme from '../../themes/default';
import React from "react";

const Wrapper = styled(Div)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${theme.sizes.borderRadius};
  padding: 32px;
  display: flex;
  flex-flow: row;
  width: 100%;
  box-sizing: border-box;
  margin: 32px 0;

  @media screen and (max-width: 600px) {
    min-width: 250px;
    flex-flow: column;
    font-size: ${theme.fonts.sizes.normal};
    justify-content: center;
    align-items: center;
  }
`;

const WrapperChildren = styled(Div)`
  margin-right: 32px;

  @media screen and (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 32px;
  }
`;

const Title = styled(Div)`
  font-weight: bold;
  font-size: ${theme.fonts.sizes.big};
  margin-bottom: 16px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
`;

const Content = styled(Div)``;

interface PokemonCardProps {
  title: React.ReactNode,
  content: React.ReactNode,
  children?: React.ReactNode,
  action?: React.ReactNode,
}

const Card = ({ title, content, children, action }: PokemonCardProps) => (
  <Wrapper>
    {children && <WrapperChildren>{children}</WrapperChildren>}
    <div>
      <Title>{title}{action}</Title>
      <Content>{content}</Content>
    </div>
  </Wrapper>
)

export default Card;