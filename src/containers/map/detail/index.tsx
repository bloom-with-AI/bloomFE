'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import * as S from './styled'
import { Box, SvgWrapper, Text, Button } from '@/components/atoms'

interface MapDetailProps {
  id: number
}

const MapDetail = ({ id }: MapDetailProps) => {
  const router = useRouter()
  const [venuInfoData, setVenuInfoData] = useState<any>()

  const getMapDetail = async (path: string) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BE_URL}${path}`

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const res = await response.json()
        setVenuInfoData(res?.venueInfo?.[0])
      }
    } catch (error) {
      console.error('예외 발생:', error)
    }
  }

  useEffect(() => {
    getMapDetail(`/search/wedding/detail/${id}`)
  }, [id])

  return (
    <S.Wrapper>
      <S.MainImageWrapper
        $svg={
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjdfMTYw%2FMDAxNzAxMDIyMDkzNjY5.GAJcE2wFvb06pZyHMbOxaqud6lcrAeeb7B3JHu9DBugg.QaYc4CxMDzTkM_YC9OdG_EArvCEnGhh3OmrXwfjHhO4g.JPEG.goldjahot%2FCK_tc01760000719_l.jpg&type=sc960_832'
        }
      >
        <S.MapDetailTitle>{venuInfoData?.place_name}</S.MapDetailTitle>
        <S.MapDetailAddress>
          {venuInfoData?.road_address_name}
        </S.MapDetailAddress>
      </S.MainImageWrapper>
      <S.MapDetailContainer>
        <Text fontSize={16} fontWeight={700} color={'gray900'}>
          웨딩홀 상세
        </Text>
        <S.MapDetailContent>
          <Box backgroundColor={'gray30'}>
            <Text width={92} fontSize={14} fontWeight={700} color={'gray500'}>
              타입
            </Text>
            <Text width={203} fontSize={14} fontWeight={500} color={'gray900'}>
              {venuInfoData?.hall_type}
            </Text>
          </Box>
          <Box backgroundColor={'gray30'}>
            <Text width={92} fontSize={14} fontWeight={700} color={'gray500'}>
              식사
            </Text>
            <Text width={203} fontSize={14} fontWeight={500} color={'gray900'}>
              {venuInfoData?.meal}
            </Text>
          </Box>
          <Box backgroundColor={'gray30'}>
            <Text width={92} fontSize={14} fontWeight={700} color={'gray500'}>
              분위기
            </Text>
            <Text width={203} fontSize={14} fontWeight={500} color={'gray900'}>
              {venuInfoData?.mood}
            </Text>
          </Box>
          <Box backgroundColor={'gray30'}>
            <Text width={92} fontSize={14} fontWeight={700} color={'gray500'}>
              최소 보증 인원
            </Text>
            <Text width={203} fontSize={14} fontWeight={500} color={'gray900'}>
              {venuInfoData?.min_guarantee}
            </Text>
          </Box>
          <Box backgroundColor={'gray30'}>
            <Text width={92} fontSize={14} fontWeight={700} color={'gray500'}>
              수용 가능 인원
            </Text>
            <Text width={203} fontSize={14} fontWeight={500} color={'gray900'}>
              {venuInfoData?.capacity}
            </Text>
          </Box>
          <Box backgroundColor={'gray30'} display={'flexJustifyCenter'}>
            <Box
              backgroundColor={'gray30'}
              width={92}
              fontSize={14}
              fontWeight={700}
              color={'gray500'}
            >
              주차
            </Box>
            <Text width={203} fontSize={14} fontWeight={500} color={'gray900'}>
              {venuInfoData?.parking}
            </Text>
          </Box>
          <Box backgroundColor={'gray30'}>
            <Text width={92} fontSize={14} fontWeight={700} color={'gray500'}>
              지하철역
            </Text>
            <Text width={203} fontSize={14} fontWeight={500} color={'gray900'}>
              서울 강남구
            </Text>
          </Box>
        </S.MapDetailContent>
      </S.MapDetailContainer>
      <S.MainContainer>
        <SvgWrapper
          svg={
            'https://cdn.imweb.me/upload/S20200508a1f500ca054db/35bbd373909b3.png'
          }
          width={335}
          height={335}
          borderRadius={{ borderRadius: 20 }}
        />
        <SvgWrapper
          svg={
            'https://cdn.imweb.me/upload/S20200508a1f500ca054db/35bbd373909b3.png'
          }
          width={335}
          height={335}
          borderRadius={{ borderRadius: 20 }}
        />
      </S.MainContainer>
      <Button
        width={335}
        height={60}
        fontWeight={700}
        borderRadius={12}
        color={'gray0'}
        backgroundColor={'primary500'}
        margin={'650px 0 20px 20px'}
        onClick={() => router.push(venuInfoData?.kakao_detail_link)}
      >
        홈페이지 바로가기
      </Button>
    </S.Wrapper>
  )
}

export default MapDetail
