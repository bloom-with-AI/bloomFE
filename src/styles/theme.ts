interface Font {
  weight: 400 | 500 | 700
  size: number
  lineHeight: number
  notoSans?: boolean
}

interface Flex {
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
  flexWrap?: string
}

const FONT = ({ weight, size, lineHeight, notoSans }: Font): string => {
  return `
    font-family: ${notoSans ? 'Noto Sans' : 'Pretendard'};
    font-weight: ${weight};
    font-size: ${size}px;
    line-height: ${lineHeight}px;
  `
}

const fonts = {
  title1: FONT({ weight: 700, size: 24, lineHeight: 32 }),
  title2: FONT({ weight: 700, size: 20, lineHeight: 26 }),
  title3: FONT({ weight: 700, size: 18, lineHeight: 24 }),
  subTitle1_B: FONT({ weight: 700, size: 16, lineHeight: 22 }),
  subTitle1_M: FONT({ weight: 500, size: 16, lineHeight: 22 }),
  subTitle2_B: FONT({ weight: 700, size: 14, lineHeight: 20 }),
  subTitle2_M: FONT({ weight: 500, size: 14, lineHeight: 20 }),
  body1: FONT({ weight: 400, size: 24, lineHeight: 32 }),
  body2: FONT({ weight: 400, size: 18, lineHeight: 24 }),
  body3: FONT({ weight: 400, size: 16, lineHeight: 22 }),
  body4: FONT({ weight: 400, size: 14, lineHeight: 18 }),
  detail: FONT({ weight: 400, size: 12, lineHeight: 16 }),
} as const

function FLEX({
  justifyContent = 'start',
  alignItems = 'start',
  flexDirection = 'row',
  flexWrap = 'nowrap',
}: Flex): string {
  return `
  display: ${'flex'};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction:  ${flexDirection};
  flex-wrap:   ${flexWrap};
  `
}

const flex = {
  flex: FLEX({}),
  flexCC: FLEX({
    justifyContent: 'center',
    alignItems: 'center',
  }),
  flexJustifyCenter: FLEX({
    justifyContent: 'center',
  }),
  flexAlignItemsCenter: FLEX({
    alignItems: 'center',
  }),
  flexDCC: FLEX({
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }),
  flexDJC: FLEX({
    justifyContent: 'center',
    flexDirection: 'column',
  }),
  flexDAC: FLEX({
    alignItems: 'center',
    flexDirection: 'column',
  }),
  flexEC: FLEX({
    justifyContent: 'flex-end',
    alignItems: 'center',
  }),
  flexFlexStartCenter: FLEX({
    alignItems: 'center',
  }),
  flexSBC: FLEX({
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  flexSBS: FLEX({
    justifyContent: 'space-between',
  }),
  flexDSB: FLEX({
    justifyContent: 'space-between',
    flexDirection: 'column',
  }),
  flexCW: FLEX({
    alignItems: 'center',
    flexWrap: 'wrap',
  }),
  flexW: FLEX({
    flexWrap: 'wrap',
  }),
} as const

const colors = {
  black: '#000000',
  gray900: '#1E1E1E',
  gray800: '#333333',
  gray700: '#4D4D4D',
  gray600: '#666666',
  gray500: '#808080',
  gray400: '#A2A2A2',
  gray300: '#BFBCBC',
  gray250: '#bfbcbd',
  gray200: '#DDDDDD',
  gray100: '#EEEEEE',
  gray70: '#cccccc',
  gray50: '#e9e9e9',
  gray30: '#f6f6f6',
  gray0: '#FFFFFF',
  primary600: '#E64E69',
  primary500: '#FF5775',
  primary400: '#FF738C',
  primary300: '#FF96A9',
  primary200: '#FFBCC8',
  primary100: '#FFDDE3',
  primary50: '#FFEEF1',
  secondary600: '#8C6BE6',
  secondary500: '#9B77FF',
  secondary400: '#AF92FF',
  secondary300: '#C3ADFF',
  secondary200: '#D7C9FF',
  secondary100: '#D7C9FF',
  secondary50: '#D7C9FF',
  secondary30: '#ebe4ff',
  wrapper: '#f8f9f9',
} as const

const theme = {
  fonts,
  colors,
  flex,
} as const

export default theme
