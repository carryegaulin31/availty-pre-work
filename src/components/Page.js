import React from 'react'

import styled from 'styled-components'

const Page = styled.div`
  margin: 50px auto 0;
  text-align: center;
  width: 50%;
  background-color: floralwhite;
`

export default ({ children }) => (
  <Page>{children}</Page>
)
