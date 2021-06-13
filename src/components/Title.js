import React from 'react'

import styled from 'styled-components'

const Title = styled.div`
font-size: 40px;
font-weight: 600;
margin-bottom: 20px;
font-style: italic;
color: orange;
`

const Subtitle = styled.div`
font-size: 20px;
color: gold;
font-style: italic;
`
export default () => (
  <>
    <Title>Availty Provider Registration Page</Title>
    <Subtitle>Please fill out the form below</Subtitle>
  </>
)
