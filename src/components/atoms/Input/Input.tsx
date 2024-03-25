import React from 'react'
import * as S from './styled'

export interface InputProps {
  type?: string
  value?: string
  maxlength?: number
  disabled?: boolean
  placeholder?: string
  registerName?: string

  onBlur?: () => void
  onFocus?: () => void
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>

  color?: string
  margin?: string
  padding?: string
  fontSize?: number
  leftIconTop?: number
  rightIconTop?: number
  borderColor?: string
  widthOnFocus?: number
  borderRadius?: number
  leftIcon?: string | null
  rightIcon?: string | null
  backgroundColor?: string
  placeholderColor?: string
  borderColorOnFocus?: string
  width?: number | string | 'auto'
  height?: number | string | 'auto'
  containerWidth?: number | string | 'auto'
}

const Input: React.FC<InputProps> = ({
  value,
  disabled,
  maxlength,
  placeholder,
  type = 'text',

  onBlur,
  onFocus,
  onChange,
  onKeyDown,

  margin,
  padding,
  leftIcon,
  rightIcon,
  leftIconTop,
  rightIconTop,
  borderColor,
  widthOnFocus,
  placeholderColor,
  borderColorOnFocus,
  fontSize = 14,
  width = 'auto',
  height = 'auto',
  borderRadius = 0,
  color = 'gray900',
  containerWidth = 'auto',
  backgroundColor = 'gray0',
}) => {
  const inputStyle = {
    $color: color,
    $width: width,
    $height: height,
    $margin: margin,
    $padding: padding,
    $fontSize: fontSize,
    $borderColor: borderColor,
    $widthOnFocus: widthOnFocus,
    $borderRadius: borderRadius,
    $containerWidth: containerWidth,
    $backgroundColor: backgroundColor,
    $placeholderColor: placeholderColor,
    $borderColorOnFocus: borderColorOnFocus,
  }

  return (
    <S.InputContainer $containerWidth={containerWidth}>
      {leftIcon && <S.InputLeftIcon $top={leftIconTop} $svg={leftIcon} />}
      <S.Input
        type={type}
        value={value}
        disabled={disabled}
        autoComplete={'off'}
        maxLength={maxlength}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onWheel={(e) => e.currentTarget.blur()}
        {...inputStyle}
      />
      {rightIcon && <S.InputRightIcon $top={rightIconTop} $svg={rightIcon} />}
    </S.InputContainer>
  )
}

export default Input
