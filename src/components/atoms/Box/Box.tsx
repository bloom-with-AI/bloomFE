'use client'

import React from 'react'
import * as S from './styled'

export interface BoxProps {
  gap?: number
  color?: string
  margin?: string
  cursor?: string
  padding?: string
  display?: string
  fontSize?: number
  fontWeight?: number
  textAlign?: string
  borderColor?: string
  borderRadius?: number
  backgroundColor?: string
  width?: number | string | 'auto'
  height?: number | string | 'auto'
  minWidth?: number | string | 'auto'
  children?: React.ReactNode
}

const Box: React.FC<BoxProps> = ({
  margin,
  padding,
  display,
  gap = 0,
  textAlign,
  borderColor,
  fontSize = 14,
  fontWeight = 400,
  width = 'auto',
  height = 'auto',
  minWidth = 'auto',
  color = 'gray800',
  cursor = 'default',
  borderRadius = 0,
  backgroundColor = 'gray0',
  children,
}) => {
  const style = {
    $gap: gap,
    $color: color,
    $width: width,
    $margin: margin,
    $height: height,
    $cursor: cursor,
    $padding: padding,
    $display: display,
    $minWidth: minWidth,
    $fontSize: fontSize,
    $textAlign: textAlign,
    $fontWeight: fontWeight,
    $borderRadius: borderRadius,
    $borderColor: borderColor,
    $backgroundColor: backgroundColor,
  }
  return <S.Box {...style}>{children}</S.Box>
}

export default Box
