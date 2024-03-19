import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 375px;
  position: relative;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const MainImageWrapper = styled.div<{ $svg: any }>`
  width: 375px;
  height: 375px;
  background-image: url(${({ $svg }) => $svg});
  background-repeat: no-repeat;
  background-position: center center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  ${({ theme }) => theme.flex.flexAlignItemsCenter};
  position: absolute;
  padding: 0 20px;
`
export const MapDetailTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray0};
  position: absolute;
  bottom: 93px;
`
export const MapDetailAddress = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray0};
  position: absolute;
  bottom: 69px;
`
export const MapDetailContainer = styled.div`
  width: 335px;
  min-height: 283px;
  font-size: 14px;
  font-weight: 700;
  padding: 20px 18px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.gray30};
  position: absolute;
  top: 322px;
  left: 20px;
  z-index: 2;
`
export const MapDetailContent = styled.div`
  width: 299px;
  height: 204px;
  margin: 10px 0 0 0;
  padding: 17px 0 0 0;
  border-top: 1px solid gray;
  border-color: ${({ theme }) => theme.colors.gray50};
  background-color: ${({ theme }) => theme.colors.gray40};
  ${({ theme }) => theme.flex.flexDJC};
  gap: 6px;
`
export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  top: 616px;
`
