'use client'

import React from 'react'
import * as S from './styled'

interface SvgWrapperProps {
  svg: any
  width?: number
  height?: number
  borderRadius?: {
    topLeft?: number
    topRight?: number
    bottomLeft?: number
    bottomRight?: number
    borderRadius?: number
  }
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const SvgWrapper: React.FC<SvgWrapperProps> = ({
  svg,
  width = 24,
  height = 24,
  style,
  borderRadius,
  onClick,
}) => {
  return (
    <S.SvgWrapper
      svg={svg}
      style={style}
      width={width}
      height={height}
      $borderRadius={borderRadius}
      onClick={onClick}
    />
  )
}

export default SvgWrapper
