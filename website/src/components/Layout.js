import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'

import Title from './title'

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    color: inherit;
    font: inherit;
    margin: 0;
    min-width: 0;
    padding: 0;
  }

  body {
    cursor: default;
    font-family: 'Fira Sans', Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  width: 960px;
`
const Content = styled.div`
  padding: 0 20px;
`

const Layout = ({ children, title, href }) => (
  <>
    <GlobalStyle />
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Wrapper>
      <Title href={href}>{title}</Title>
      <Content>{children}</Content>
    </Wrapper>
  </>
)

export default Layout
