import styled from 'styled-components'

export const MapDetailCardContainer = styled.div`
  width: 335px;
  height: 110px;
  cursor: pointer;
  position: absolute;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);
  z-index: 1;
  border-radius: 12px;
  padding: 16px 12px 12px 12px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.gray0};
  ${({ theme }) => theme.flex.flexDJC};
`
export const Title = styled.h3`
  height: 22px;
  padding: 0 0 4px 0;
  ${({ theme }) => theme.flex.flexAlignItemsCenter};
  ${({ theme }) => theme.fonts.subTitle1_B};
`
