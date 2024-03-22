'use client'

import { useEffect, useRef } from 'react'
import * as S from './styled'
import { useCurrentWindowHeight } from '@/hooks'
import { ChatBox } from './_fragments'

interface ChatListProps {
  chatList: {
    userId?: number
    message: string
    chatType: string
    mapInfo?: { placeName: string; thumbnail: string }[]
  }[]
}

const ChatList = ({ chatList }: ChatListProps) => {
  const currentHeight = useCurrentWindowHeight()
  const chatWrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    chatWrapperRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatList])

  return (
    <S.Wrapper currentHeight={currentHeight}>
      {chatList?.map((chat, index) => {
        return (
          <ChatBox
            key={index}
            mapInfo={chat?.mapInfo}
            speaker={chat?.chatType === 'chatbot' ? 'lume' : 'me'}
          >
            {chat?.message}
          </ChatBox>
        )
      })}
      <div ref={chatWrapperRef} />
    </S.Wrapper>
  )
}

export default ChatList
