import styled from 'styled-components'

interface BoxProps {
  $gap?: number
  $color: string
  $margin?: string
  $padding?: string
  $display?: string
  $cursor?: string
  $fontSize: number
  $fontWeight: number
  $textAlign?: string
  $borderColor?: string
  $borderRadius: number
  $backgroundColor: string
  $width: number | string | 'auto'
  $height: number | string | 'auto'
  $minWidth: number | string | 'auto'
}

export const Box = styled.div<BoxProps>`
  width: ${({ $width }) => {
    if ($width === 'auto') return 'auto'
    else if (typeof $width === 'string') return $width
    else return `${$width}px`
  }};
  min-width: ${({ $minWidth }) => {
    if ($minWidth === 'auto') return 'auto'
    else if (typeof $minWidth === 'string') return $minWidth
    else return `${$minWidth}px`
  }};
  height: ${({ $height }) => {
    if ($height === 'auto') return 'auto'
    else if (typeof $height === 'string') return $height
    else return `${$height}px`
  }};

  color: ${({ theme, $color }) => theme.colors[`${$color}`]};
  background-color: ${({ theme, $backgroundColor }) =>
    theme.colors[`${$backgroundColor}`]};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  border: ${({ theme, $borderColor }) =>
    `1px solid ${theme.colors[`${$borderColor}`]}`};

  padding: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin};

  word-break: break-all;
  text-align: ${({ $textAlign }) => $textAlign};
  font-size: ${({ $fontSize }) => $fontSize}px;
  font-weight: ${({ $fontWeight }) => $fontWeight};

  cursor: ${({ $cursor }) => $cursor};

  ${({ theme, $display }) => {
    if ($display === 'flex') {
      return theme.flex.flex
    } else if ($display === 'flexDJC') {
      return theme.flex.flexDJC
    } else if ($display === 'flexDAC') {
      return theme.flex.flexDAC
    } else if ($display === 'flexDCC') {
      return theme.flex.flexDCC
    } else if ($display === 'flexEC') {
      return theme.flex.flexEC
    } else if ($display === 'flexSBC') {
      return theme.flex.flexSBC
    } else if ($display === 'flexCC') {
      return theme.flex.flexCC
    } else if ($display === 'flexJustifyCenter') {
      return theme.flex.flexJustifyCenter
    } else if ($display === 'flexAlignItemsCenter') {
      return theme.flex.flexAlignItemsCenter
    } else if ($display === 'flexFlexStartCenter') {
      return theme.flex.flexFlexStartCenter
    } else if ($display === 'flexCW') {
      return theme.flex.flexCW
    } else if ($display === 'flexW') {
      return theme.flex.flexW
    }
  }};
  gap: ${({ $gap }) => $gap}px;
`
