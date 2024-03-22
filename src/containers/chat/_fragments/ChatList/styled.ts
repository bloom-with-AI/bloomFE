import styled from 'styled-components'

export const Wrapper = styled.div<{
  currentHeight: number
}>`
  width: 375px;
  padding: 12px 20px;
  height: ${({ currentHeight }) =>
    currentHeight ? `calc(${currentHeight}px - 194px)` : `calc(100vh - 194px)`};
  ${({ theme }) => theme.flex.flexDAC};
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`
