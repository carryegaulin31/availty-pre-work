import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
display: block;
  margin-left: 10%;
  margin-right: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export default () => (

  <Img src="https://www.availity.com/favicon.ico" alt="logo" className="w3-display-left" />
)
