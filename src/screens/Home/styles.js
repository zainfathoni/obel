import styled from '@emotion/styled/macro'
import tw from 'tailwind.macro'

export const Main = styled.main`
  min-height: 800px;
  ${tw`
    flex flex-col items-center justify-center
    text-white bg-gray-800
    text-3xl
  `}
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
