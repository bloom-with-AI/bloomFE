import styled from 'styled-components'

interface SvgWrapperProps {
  width: number
  height: number
  svg: any
  $borderRadius?: {
    topLeft?: number
    topRight?: number
    bottomLeft?: number
    bottomRight?: number
    borderRadius?: number
  }
}

export const SvgWrapper = styled.div<SvgWrapperProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-image: url(${({ svg }) => svg});
  background-repeat: no-repeat;
  background-position: center center;
  border-top-left-radius: ${({ $borderRadius }) => $borderRadius?.topLeft}px;
  border-top-right-radius: ${({ $borderRadius }) => $borderRadius?.topRight}px;
  border-bottom-left-radius: ${({ $borderRadius }) =>
    $borderRadius?.bottomLeft}px;
  border-bottom-right-radius: ${({ $borderRadius }) =>
    $borderRadius?.bottomRight}px;
  border-radius: ${({ $borderRadius }) => $borderRadius?.borderRadius}px;
`
