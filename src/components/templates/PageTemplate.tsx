import React from 'react'
import styled from 'styled-components'
import theme from '../../themes/default'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: ${theme.palette.background};
  color: ${theme.palette.foreground};
`

const Header = styled.header`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`
const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

const Footer = styled.footer`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

type PageTemplateProps = {
  header?: React.ReactNode,
  footer?: React.ReactNode,
  contentCentered?: boolean,
}

const PageTemplate: React.FunctionComponent<PageTemplateProps> = ({
  header, children, footer, contentCentered = false, ...props
}) => {
  return (
    <Wrapper {...props}>
      {header && <Header>{header}</Header>}
      <Content>{children}</Content>
      {footer && <Footer>{footer}</Footer>}
    </Wrapper>
  )
}

export default PageTemplate
