'use client'

import React from 'react'
import * as S from './styled'

export interface ButtonProps {
  color?: string
  minWidth?: number
  width?: number | 'auto'
  height?: number | string
  padding?: string
  margin?: string
  fontSize?: number
  fontWeight?: number
  disabled?: boolean
  borderColor?: string
  borderRadius?: number
  backgroundColor?: string
  hoverBackgroundColor?: string
  children: React.ReactElement | string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
  margin,
  padding,
  minWidth,
  borderColor,
  fontSize = 16,
  borderRadius = 4,
  fontWeight = 400,
  disabled = false,
  width = 'auto',
  height = 'auto',
  color = 'gray800',
  hoverBackgroundColor,
  backgroundColor = 'gray0',
  children,
  onClick,
}) => {
  return (
    <S.Button
      $color={color}
      $width={width}
      $margin={margin}
      $height={height}
      $padding={padding}
      disabled={disabled}
      $minWidth={minWidth}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $backgroundColor={backgroundColor}
      $hoverBackgroundColor={hoverBackgroundColor}
      onClick={onClick}
    >
      {children}
    </S.Button>
  )
}

export default Button
