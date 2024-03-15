'use client'

import Link from 'next/link'
import Image from 'next/image'
import * as S from './styled'
import { Box, Text } from '@/components/atoms'

interface MapDetailCardProps {
  currentMapItem: {
    map_id: number
    place_name: string
    distance: string
    hall_type: string
    meal: string
    road_address_name: string
  }
}

const MapDetailCard = ({ currentMapItem }: MapDetailCardProps) => {
  return (
    <Link href={`/map/detail/${currentMapItem?.map_id}`}>
      <S.MapDetailCardContainer>
        <S.Title>{currentMapItem.place_name}</S.Title>
        <Box
          gap={4}
          padding={'0 0 9px 0'}
          display={'flexFlexStartCenter'}
          cursor={'pointer'}
        >
          <Box
            height={20}
            fontSize={12}
            borderRadius={4}
            width={'auto'}
            padding={'0 2px'}
            cursor={'pointer'}
            display={'flexCC'}
            color={'primary500'}
            borderColor={'primary500'}
          >
            {currentMapItem.hall_type}
          </Box>
          <Box
            height={20}
            fontSize={12}
            padding={'0 2px'}
            borderRadius={4}
            width={'auto'}
            cursor={'pointer'}
            display={'flexCC'}
            color={'secondary500'}
            borderColor={'secondary500'}
          >
            {currentMapItem.meal}
          </Box>
        </Box>
        <Box display={'flexAlignItemsCenter'}>
          <Image
            width={20}
            height={20}
            alt="보라색 지도 마커"
            src="/svgs/IconMapMarkerP.svg"
          />
          <Text
            padding={'3px 0 0 2px'}
            fontSize={14}
            fontWeight={500}
            cursor={'pointer'}
            color={'gray600'}
          >
            {currentMapItem.road_address_name}
          </Text>
        </Box>
      </S.MapDetailCardContainer>
    </Link>
  )
}

export default MapDetailCard
