import styled from 'styled-components'

export const AIIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  box-shadow: 1px 4px 8px 0 rgba(155, 119, 255, 0.4);
  background-image: linear-gradient(87deg, #ff5775 17%, #9a77ff 97%);
  ${({ theme }) => theme.flex.flexCC};
`
