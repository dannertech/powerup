import React, { Component } from 'react'
import styled from 'styled-components'

const Image = styled.div`
margin: 180px 0px 0px 0px;
`

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>This is the homepage</h1>

        <Image>
          <img alt="Thunderbolt with Power On button"
            src='/images/power-button-off-image.png' />
        </Image>
      </div>
    )
  }
}
