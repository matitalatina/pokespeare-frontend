import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from '../../themes/default'

const styles = css`
  font-family: ${theme.fonts.primary};
  text-decoration: none;
  font-weight: 500;
  color: ${theme.palette.foreground};

  &:hover {
    text-decoration: underline;
  }
`

const Anchor = styled.a`${styles}`

const Link = ({ ...props }) => {
  return <Anchor {...props} />
}

Link.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  to: PropTypes.string,
}

Link.defaultProps = {
  palette: 'primary',
}

export default Link
