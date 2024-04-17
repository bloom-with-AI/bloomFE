import styled from 'styled-components'

export const Wrapper = styled.div<{
  currentHeight: number
}>`
  width: 375px;
  padding: 20px 0 35px 0;
  height: ${({ currentHeight }) =>
    currentHeight ? `calc(${currentHeight}px - 194px)` : `calc(100vh - 194px)`};
  ${({ theme }) => theme.flex.flexDAC};
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const RecommendStyled = styled.button`
  margin: 4px;
  padding: 8px 16px;
  border-radius: 100px;
  border: ${({ theme }) => `1px solid ${theme.colors.primary500}`};
  ${({ theme }) => theme.fonts.body4};

  &:hover {
    color: ${({ theme }) => `${theme.colors.gray0}`};
    background-image: linear-gradient(87deg, #ff5775 17%, #9a77ff 97%);
  }
`
