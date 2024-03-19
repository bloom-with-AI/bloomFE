import styled from 'styled-components'

export const MapCardContainer = styled.div`
  width: 335px;
  height: 62px;
  cursor: pointer;
  position: absolute;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);
  z-index: 1;
  border-radius: 12px;
  padding: 16px 12px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.gray0};
  ${({ theme }) => theme.flex.flexAlignItemsCenter};
`
