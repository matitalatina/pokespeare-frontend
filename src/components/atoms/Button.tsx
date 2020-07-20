import styled, { css } from "styled-components";
import theme from "../../themes/default";
import { ifProp } from 'styled-tools'
import React, { MouseEvent } from 'react';
import Link from './Link';

const styles = css`
  display: inline-flex;
  font-family: ${theme.fonts.primary};
  align-items: center;
  white-space: nowrap;
  font-size: ${theme.fonts.sizes.normal};
  border: 0.0625em solid ${theme.palette.foreground[0]};
  height: 2.5em;
  line-height: 1em;
  width: ${ifProp('round', '2.5em', 'auto')};
  justify-content: center;
  text-decoration: none;
  cursor: ${ifProp('disabled', 'not-allowed', 'pointer')};
  opacity: ${ifProp('disabled', 0.4, 1)};
  appearance: none;
  padding: 0 1em;
  border-radius: ${ifProp('round', '400px', '0.125em')};
  box-sizing: border-box;
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  background-color: ${theme.palette.background[0]};
  color: ${theme.palette.foreground[0]};
  transition: all ${theme.speed.short};

  &:hover, &:active {
    background-color: ${theme.palette.foreground[0]};
    color: ${theme.palette.background[0]};
  }

  &:focus {
    outline: none
  }
`

const StyledLink = styled(({
  disabled, transparent, reverse, palette, height, theme, ...props
}) => <Link {...props} />)`${styles}`

const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

type ButtonProps = {
  type: 'button' | 'submit' | 'reset',
  href?: string,
  to?: string,
  disabled?: boolean,
  round?: boolean,
  title?: string,
  onClick?: (event: MouseEvent) => void,
}

const Button: React.FunctionComponent<ButtonProps> = ({ type = 'button', ...props } = { type: 'button' }) => {
  if (props.to) {
    return <StyledLink {...props} />
  } else if (props.href) {
    return <Anchor {...props} />
  }
  return <StyledButton {...props} type={type} />
}

export default Button