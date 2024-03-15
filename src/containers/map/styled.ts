import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 375px;
  position: relative;
`

export const MapFilterContainer = styled.div`
  width: 375px;
  height: 53px;
  padding: 10px 0 10px 20px;
  background-color: ${({ theme }) => theme.colors.gray0};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.flex.flexAlignItemsCenter};
  gap: 4px;
  flex-wrap: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const KakaoMapWrapper = styled.div<{
  currentHeight: number
}>`
  width: 375px;
  height: calc(100vh - 182px);
  height: ${({ currentHeight }) =>
    currentHeight ? `calc(${currentHeight}px - 182px)` : `calc(100vh - 182px)`};
  background-color: ${({ theme }) => theme.colors.wrapper};
`
