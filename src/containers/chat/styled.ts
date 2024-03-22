import styled from 'styled-components'

export const Wrapper = styled.div<{
  currentHeight: number
}>`
  width: 375px;
  height: ${({ currentHeight }) =>
    currentHeight ? `calc(${currentHeight}px - 128px)` : `calc(100vh - 128px)`};
  ${({ theme }) => theme.flex.flexDCC};
`
export const InputContainer = styled.div`
  width: 375px;
  height: 66px;
  box-shadow: 0px -4px 3px -2px rgba(0, 0, 0, 0.06);
  ${({ theme }) => theme.flex.flexCC};
  position: relative;
`
export const ChatInput = styled.input`
  width: 320px;
  height: 42px;
  padding: 10px 16px;
  border-radius: 100px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray50}`};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => `${theme.colors.gray70}`};
  }

  &:focus {
    width: 355px;
    border: ${({ theme }) => `1px solid ${theme.colors.primary500}`};
  }
`
export const InputButton = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 26px;
  background-image: url('/svgs/IconArrow.svg');
`
