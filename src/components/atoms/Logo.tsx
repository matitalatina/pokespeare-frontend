import styled from "styled-components";
import logoImg from "../../assets/img/logo.png";
import React from "react";

const Img = styled.img`
  width: 300px;
`;

const Logo = () => (
  <Img src={logoImg} />
);

export default Logo;