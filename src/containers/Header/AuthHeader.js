import React, { Component } from 'react'
import styled from 'styled-components'

import { RouterLink } from '@/components/core/Button'

const Header = styled.header`
  position: absolute;
  right: 3.5%;
  top: 4.5%;
  z-index: 10;
`

export default class AuthHeader extends Component {
  renderJoinLogin () {
    return <RouterLink dark to="/signup">Join</RouterLink>
  }
  render () {
    return (
      <Header>
        {this.renderJoinLogin()}
      </Header>
    )
  }
}