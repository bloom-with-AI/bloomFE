'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import * as S from './styled'
import { Map as KakaoMap, MapMarker } from 'react-kakao-maps-sdk'
import { Button } from '@/components/atoms'
import { useCurrentWindowHeight } from '@/hooks'
import { MapFilterModal } from './MapFilterModal'
import { MapDetailCard, MapNoSearchListCard } from './MapCard'
import useVenueMapList from '@/states/useVenueMapList'
import useCurrentPlaceId from '@/states/useCurrentPlaceId'
import useSelectedVenueCategory from '@/states/useSelectedVenueCategory'

const MAP_FILTER_TYPE = [
  { type: 'hallType', width: 61, title: '홀타입' },
  { type: 'bridType', width: 73, title: '예식형태' },
  { type: 'mood', width: 61, title: '분위기' },
  { type: 'meal', width: 73, title: '식사형태' },
  { type: 'minGuarantee', width: 73, title: '보증인원' },
  { type: 'parking', width: 61, title: '주차수' },
]

const Map = () => {
  const currentHeight = useCurrentWindowHeight()
  const { venueMapList, setVenueMapList } = useVenueMapList()
  const { selectedVenueCategory } = useSelectedVenueCategory()
  const { currentPlaceId, setCurrentPlaceId } = useCurrentPlaceId()
  const [currentFilterCategory, setCurrentFilterCategory] = useState<{
    type: string
    title: string
  }>({ type: 'hallType', title: '홀타입' })
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false)
  const [chekedFilterCategory, setCheckedFilterCategory] = useState<string[]>(
    [],
  )
  const [currentMapItem, setCurrentMapItem] = useState<any>({
    map_id: 1,
    place_name: '',
    distance: '',
    hall_type: '',
    meal: '',
    road_address_name: '',
  })

  const getMapList = async (
    path: string,
    category: Record<string, string[]> = {},
    keyword = '',
  ) => {
    try {
      const searchParams = new URLSearchParams()
      Object.keys(category).forEach((key) => {
        const values = category[key]
        values.forEach((value) => {
          searchParams.append(key, value)
        })
      })
      if (keyword) searchParams.append('keyword', keyword)

      const url = `${process.env.NEXT_PUBLIC_BE_URL}${path}?${searchParams.toString()}`

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const res = await response.json()
        setVenueMapList(res)
        setCurrentPlaceId(res?.result[0]?.map_id)
      }
    } catch (error) {
      console.error('예외 발생:', error)
    }
  }

  const handleClickFilterModal =
    (type: { type: string; title: string }) => () => {
      setIsFilterModalOpen(true)
      setCurrentFilterCategory(type)
    }

  useEffect(() => {
    const checkedCategories = Object.entries(selectedVenueCategory).reduce(
      (acc, [key, value]) => {
        if (value.length > 0) {
          acc.push(key)
        }
        return acc
      },
      [] as string[],
    )

    setCheckedFilterCategory(checkedCategories)
  }, [selectedVenueCategory])

  useEffect(() => {
    const currentLocation = venueMapList?.result?.find(
      (item) => item?.map_id === currentPlaceId,
    )

    setCurrentMapItem({
      map_id: currentLocation?.map_id,
      place_name: currentLocation?.place_name,
      distance: currentLocation?.distance,
      hall_type: currentLocation?.hall_type,
      meal: currentLocation?.meal,
      road_address_name: currentLocation?.road_address_name,
    })
  }, [currentPlaceId, venueMapList])

  useEffect(() => {
    getMapList('/search/map', selectedVenueCategory)
  }, [])

  return (
    <S.Wrapper>
      <S.MapFilterContainer>
        <Button
          width={32}
          height={32}
          fontSize={12}
          fontWeight={500}
          borderRadius={100}
          padding={'6px'}
          margin={'0 8px 0 0'}
          borderColor={'gray50'}
          hoverBackgroundColor={'primary50'}
          onClick={handleClickFilterModal({
            type: 'hallType',
            title: '홀타입',
          })}
        >
          <Image width={20} height={20} alt="필터" src="/svgs/IconFilter.svg" />
        </Button>
        {MAP_FILTER_TYPE.map(({ title, type, width }) => (
          <Button
            height={32}
            minWidth={width}
            fontSize={12}
            fontWeight={500}
            borderRadius={20}
            padding={'6px 12px'}
            hoverBackgroundColor={'primary50'}
            color={
              chekedFilterCategory.includes(type) ? 'primary500' : 'gray600'
            }
            borderColor={
              chekedFilterCategory.includes(type) ? 'primary500' : 'gray50'
            }
            key={title}
            onClick={handleClickFilterModal({ type, title })}
          >
            {title}
          </Button>
        ))}
      </S.MapFilterContainer>
      {isFilterModalOpen && (
        <MapFilterModal
          isFilterModalOpen={isFilterModalOpen}
          currentFilterCategory={currentFilterCategory}
          getMapList={getMapList}
          setIsFilterModalOpen={setIsFilterModalOpen}
        />
      )}
      <S.KakaoMapWrapper currentHeight={currentHeight}>
        <KakaoMap
          center={
            venueMapList?.result?.length
              ? {
                  lng: venueMapList.result[0]?.map_x,
                  lat: venueMapList.result[0]?.map_y,
                }
              : { lng: 127.037294911971, lat: 37.5140775104945 }
          }
          style={{ width: '375px', height: '100%' }}
          level={6}
        >
          {venueMapList?.result?.map((location: any) => (
            <MapMarker
              position={{
                lng: location?.map_x,
                lat: location?.map_y,
              }}
              image={{
                src: `${location.map_id === currentPlaceId ? 'https://cdn-icons-png.flaticon.com/512/5773/5773169.png' : 'https://i.ibb.co/1QpBW34/search-24.png'}`,
                size: {
                  width: Number(
                    `${location?.map_id === currentPlaceId ? 55 : 26}`,
                  ),
                  height: Number(
                    `${location?.map_id === currentPlaceId ? 55 : 30}`,
                  ),
                },
                options: {
                  offset: {
                    x: 20,
                    y: 20,
                  },
                },
              }}
              onClick={() => setCurrentPlaceId(location?.map_id)}
              key={location?.map_id}
            />
          ))}
        </KakaoMap>
      </S.KakaoMapWrapper>
      {!!venueMapList?.result?.length &&
        venueMapList?.isKeywordExists !== null && <MapNoSearchListCard />}
      {!!venueMapList?.result?.length && (
        <>
          <MapDetailCard currentMapItem={currentMapItem} />
        </>
      )}
    </S.Wrapper>
  )
}

export default Map
