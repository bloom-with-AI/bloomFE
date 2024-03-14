import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: calc(100vh - 182px);
  z-index: 2;
  position: absolute;
  background-color: rgba(30, 30, 30, 0.6);
`

export const MapDetailCardContainer = styled.div<{
  $isFilterModalOpen: boolean
}>`
  width: 378px;
  padding: 20px;
  position: absolute;
  top: -1px;
  left: -1px;
  z-index: 2;
  border-end-start-radius: 12px;
  border-end-end-radius: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray100};
  background-color: ${({ theme }) => theme.colors.gray0};
  cursor: pointer;

  opacity: ${({ $isFilterModalOpen }) => ($isFilterModalOpen ? 1 : 0)};
  transform: ${({ $isFilterModalOpen }) =>
    $isFilterModalOpen ? 'translateY(0)' : 'translateY(-100%)'};

  @keyframes slideFromTop {
    from {
      opacity: 0;
      transform: translateY(-10%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: ${({ $isFilterModalOpen }) =>
    $isFilterModalOpen ? 'slideFromTop 0.5s ease-in-out' : 'none'};
`
export const Title = styled.h3`
  ${({ theme }) => theme.flex.flexAlignItemsCenter};
  ${({ theme }) => theme.fonts.subTitle1_B};
`
