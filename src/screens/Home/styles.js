import styled from '@emotion/styled/macro'
import tw from 'tailwind.macro'

export const Main = styled.main`
  background-color: #282c34;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const Link = tw.a`
  text-blue-500
  hover:underline
`
