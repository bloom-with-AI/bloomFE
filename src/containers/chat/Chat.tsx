'use client'

import { useState } from 'react'
import * as S from './styled'
import { useCurrentWindowHeight } from '@/hooks'
import { ChatRecommend, ChatList } from './_fragments'

interface ChatList {
  userId?: number
  message: string
  chatType: string
  mapInfo?: { placeName: string; thumbnail: string }[]
}

const recommendList = [
  '요즘 인기있는 어두운 웨딩홀은 어디야?',
  '서울에 위치한 야외 예식장을 추천해줘',
  '하객 300명 이상',
  '논현역 인근 결혼식장',
]

const Chat = () => {
  const currentHeight = useCurrentWindowHeight()
  const [isFocused, setIsFocused] = useState(false)
  const [chatList, setChatList] = useState<ChatList[]>([
    {
      chatType: 'chatbot',
      message:
        '안녕하세요? 당신의 AI 웨딩플래너입니다.\n어떤 웨딩홀에서 결혼하고 싶으신가요?\n자유롭게 말씀해 주세요.',
    },
  ])

  const handleClickRecommendItem = (item: string) => () => {
    setChatList((prev) => {
      const currentChatList = [
        ...prev,
        {
          chatType: 'me',
          message: item,
        },
      ]

      return currentChatList
    })
  }

  return (
    <S.Wrapper currentHeight={currentHeight}>
      {isFocused || chatList.length > 1 ? (
        <ChatList chatList={chatList} />
      ) : (
        <ChatRecommend
          recommendList={recommendList}
          handleClickRecommendItem={handleClickRecommendItem}
        />
      )}
      <S.InputContainer>
        <S.ChatInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="원하시는 조건을 입력해 주세요"
        />
        {isFocused && <S.InputButton />}
      </S.InputContainer>
    </S.Wrapper>
  )
}

export default Chat
