import React from 'react'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import Title from '../components/Title'
import GoBack from '../components/GoBack'

export default () => (
  <Page>
    <Title />
    <NotFound message="Sorry,I am unable to find the page you are looking for" />
    <GoBack />
  </Page>
)
