import { Link } from '@reach/router'
import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'tailwind.macro'

export const AppContainer = tw.div`
  flex flex-col items-stretch
`

export const NavWrapper = tw.div`
  bg-purple-200
`

export const NavContainer = styled.nav`
  ${tw`
    flex justify-start
  `};
  line-height: 3rem;
  margin: auto;
  max-width: 60em;

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
