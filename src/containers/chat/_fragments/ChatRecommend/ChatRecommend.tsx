'use client'

import Image from 'next/image'
import * as S from './styled'
import { Box, Text } from '@/components/atoms'
import { useCurrentWindowHeight } from '@/hooks'

interface ChatRecommendProps {
  recommendList: string[]
  handleClickRecommendItem: (item: string) => () => void
}

const ChatRecommand = ({
  recommendList,
  handleClickRecommendItem,
}: ChatRecommendProps) => {
  const currentHeight = useCurrentWindowHeight()

  return (
    <S.Wrapper currentHeight={currentHeight}>
      <Box
        gap={4}
        width={290}
        height={68}
        display={'flexDCC'}
        margin={'0 0 24px 0'}
      >
        <Text height={32} fontSize={24} fontWeight={400} color={'gray900'}>
          안녕하세요!
        </Text>
        <Text
          width={291}
          height={32}
          fontSize={24}
          fontWeight={700}
          color={'gray900'}
        >
          당신의 AI 웨딩플래너 루미예요
        </Text>
      </Box>
      <Image width={240} height={249} alt="홈" src={'/svgs/IconLumyL.svg'} />
      <Text
        width={189}
        height={56}
        fontSize={20}
        fontWeight={700}
        color={'gray900'}
        margin={'23px 0 20px 0'}
      >
        원하시는 조건에 딱 맞는 웨딩홀을 찾아드릴게요!
      </Text>
      <Box width={320} height={124} display={'flexCCW'}>
        {recommendList.map((item) => (
          <S.RecommendStyled
            key={item}
            onClick={handleClickRecommendItem(item)}
          >
            {item}
          </S.RecommendStyled>
        ))}
      </Box>
    </S.Wrapper>
  )
}

export default ChatRecommand
