import styled from 'styled-components'

interface ButtonProps {
  $color?: string
  $minWidth?: number
  $width?: number | 'auto'
  $height?: number | string
  $margin?: string
  $padding?: string
  $fontSize: number
  $fontWeight: number
  $marginTop?: number
  $borderColor?: string
  $borderRadius: number
  $backgroundColor: string
  $hoverBackgroundColor?: string
  disabled?: boolean
}

export const Button = styled.button<ButtonProps>`
  box-sizing: border-box;
  font-style: normal;
  width: ${({ $width }) => ($width === 'auto' ? 'auto' : `${$width}px`)};
  min-width: ${({ $minWidth }) => ($minWidth ? `${$minWidth}px` : 'auto')};
  height: ${({ $height }) => {
    if ($height === 'auto') return 'auto'
    else if (typeof $height === 'string') return $height
    else return `${$height}px`
  }};
  padding: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin};

  font-size: ${({ $fontSize }) => $fontSize}px;
  font-weight: ${({ $fontWeight }) => $fontWeight};

  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  color: ${({ theme, $color }) => theme.colors[`${$color}`]};
  background-color: ${({ theme, $backgroundColor }) =>
    theme.colors[`${$backgroundColor}`]};
  border: ${({ theme, $borderColor }) =>
    `1px solid ${theme.colors[`${$borderColor}`]}`};

  ${({ theme }) => theme.flex.flexCC};

  &:hover {
    background-color: ${({ theme, $hoverBackgroundColor }) =>
      theme.colors[`${$hoverBackgroundColor}`]};
    border: ${({ theme, $hoverBackgroundColor }) =>
      `1px solid ${theme.colors[`${$hoverBackgroundColor}`]}`};
  }
  &:active {
  }
`
