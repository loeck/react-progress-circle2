import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

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
  margin: 100px auto 0 auto;
  width: 960px;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Wrapper>{children}</Wrapper>
  </>
)

export default Layout
