import { Link } from '@reach/router'
import React from 'react'

import styled from '@emotion/styled/macro'

export const AppContainer = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
`

export const NavContainer = styled.nav`
  background-color: #d1c4e9;
  display: flex;
  justify-content: flex-start;
  line-height: 3rem;
  margin: auto;
  min-width: 60em;

  a {
    border-right-color: rgba(0, 0, 0, 0.12);
    border: 1px solid #d1c4e9;
    color: #212121;
    float: left;
    padding: 0 0.75rem;
    text-decoration: none;
    transition: 0.25s;
  }
`

export const NavLink = styled(({ right, ...props }) => <Link {...props} />)`
  ${props => props.right && `margin-left: auto;`}
`
