import React from 'react'
import Image from 'next/image'
import * as S from './styled'
import { Box, SvgWrapper } from '@/components/atoms'

export interface ChatBoxProps {
  children: string
  speaker: 'me' | 'lume'
  mapInfo?: { placeName: string; thumbnail: string }[]
}

const ChatBox: React.FC<ChatBoxProps> = ({
  mapInfo,
  children,
  speaker = 'lume',
}) => {
  return (
    <S.Wrapper speaker={speaker}>
      {speaker === 'lume' && (
        <Image
          width={68}
          height={68}
          alt="Lumy Profile"
          src={'/images/lume_face.png'}
        />
      )}
      <S.ChatItemBox speaker={speaker}>{children}</S.ChatItemBox>
      {!!mapInfo?.length && speaker === 'lume' && (
        <S.ChatRankListBox>
          {mapInfo?.map((info, index) => {
            return (
              <Box
                key={index}
                width={160}
                height={208}
                minWidth={160}
                backgroundColor={'primary100'}
              >
                <Box
                  gap={4}
                  display={'flex'}
                  margin={'0 0 8px 0'}
                  backgroundColor={'primary100'}
                >
                  <Box
                    width={20}
                    fontWeight={700}
                    color={'primary450'}
                    backgroundColor={'primary100'}
                  >
                    {index + 1}위
                  </Box>
                  <S.RankItemTitle>{info?.placeName}</S.RankItemTitle>
                </Box>
                <SvgWrapper
                  width={160}
                  height={180}
                  borderRadius={{ borderRadius: 12 }}
                  svg={'/images/lume_face.png'}
                />
              </Box>
            )
          })}
        </S.ChatRankListBox>
      )}
    </S.Wrapper>
  )
}

export default ChatBox
