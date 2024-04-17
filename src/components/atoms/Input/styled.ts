import styled from 'styled-components'

interface InputProps {
  $color: string
  $margin?: string
  $padding?: string
  $fontSize: number
  $borderRadius: number
  $borderColor?: string
  $widthOnFocus?: number
  $backgroundColor: string
  $placeholderColor?: string
  $borderColorOnFocus?: string
  $width: number | string | 'auto'
  $height: number | string | 'auto'
  $containerWidth: number | string | 'auto'
}

interface IconProps {
  $svg: string
  $top?: number
}

export const InputContainer = styled.div<{
  $containerWidth: number | string | 'auto'
}>`
  position: relative;
  width: ${({ $containerWidth }) => {
    if ($containerWidth === 'auto') return 'auto'
    else if (typeof $containerWidth === 'string') return $containerWidth
    else return `${$containerWidth}px`
  }};
  ${({ theme }) => theme.flex.flexCC};
`

export const InputLeftIcon = styled.div<IconProps>`
  position: absolute;
  left: 0;
  top: ${({ $top }) => $top}px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ $svg }) => $svg});
`

export const InputRightIcon = styled.div<IconProps>`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 0;
  top: ${({ $top }) => $top}px;
  margin-right: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ $svg }) => $svg});
`

export const Input = styled.input<InputProps>`
  outline: none;
  width: ${({ $width }) => {
    if ($width === 'auto') return 'auto'
    else if (typeof $width === 'string') return $width
    else return `${$width}px`
  }};
  height: ${({ $height }) => {
    if ($height === 'auto') return 'auto'
    else if (typeof $height === 'string') return $height
    else return `${$height}px`
  }};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  font-size: ${({ $fontSize }) => $fontSize}px;
  border: ${({ theme, $borderColor }) =>
    `1px solid ${theme.colors[`${$borderColor}`]}`};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  color: ${({ theme, $color }) => theme.colors[`${$color}`]};

  &::placeholder {
    color: ${({ theme, $placeholderColor }) =>
      theme.colors[`${$placeholderColor}`]};
  }
  &:focus {
    width: ${({ $width, $widthOnFocus }) => {
      if ($widthOnFocus) return `${$widthOnFocus}px`
      else return `${$width}px`
    }};
    border: ${({ theme, $borderColorOnFocus }) =>
      `1px solid ${theme.colors[`${$borderColorOnFocus}`]}`};
  }
  &:disabled {
    border: none;
    background-color: ${({ theme, $backgroundColor }) =>
      theme.colors[`${$backgroundColor}`]};
  }
`
