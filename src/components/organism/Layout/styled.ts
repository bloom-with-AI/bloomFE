import styled from 'styled-components'

export const Container = styled.div<{
  innerHeight: number
  currentHeight: number
}>`
  width: 375px;
  max-width: 375px;
  height: ${({ innerHeight, currentHeight }) =>
    currentHeight
      ? `calc(${currentHeight}px - ${innerHeight}px)`
      : `calc(100vh - ${innerHeight}px)`};
  margin: auto;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.gray0};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.flex.flexDAC};
`
