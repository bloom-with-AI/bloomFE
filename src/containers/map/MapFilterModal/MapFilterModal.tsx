'use client'

import { useState } from 'react'
import * as S from './styled'
import { Box, Button } from '@/components/atoms'
import useSelectedVenueCategory from '@/states/useSelectedVenueCategory'

const MAP_FILTER_ITEMS: { [key: string]: string[] } = {
  hallType: [
    '컨벤션',
    '일반홀',
    '하우스',
    '채플',
    '야외',
    '가든',
    '호텔',
    '스몰',
  ],
  bridType: ['단독 예식', '동시 예식'],
  mood: [
    '밝은',
    '화사한',
    '웅장한',
    '우아한',
    '어두운',
    '모던한',
    '화려한',
    '세련된',
    '따뜻한',
    '고급스러운',
  ],
  meal: ['뷔페', '코스', '한상차림'],
  minGuarantee: [
    '100명 미만',
    '150명',
    '200명',
    '250명',
    '300명',
    '350명',
    '400명',
    '450명',
    '500',
    '500명 이상',
  ],
  parking: [
    '불가',
    '100대 미만',
    '100-199대',
    '200-299대',
    '300대-399대',
    '400-499대',
    '500-599대',
    '600-1000대',
    '무제한',
  ],
}

interface MapFilterModalProps {
  isFilterModalOpen: boolean
  currentFilterCategory: {
    type: string
    title: string
  }
  getMapList: (path: string, params: Record<string, string[]>) => Promise<void>
  setIsFilterModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MapFilterModal = ({
  isFilterModalOpen,
  currentFilterCategory,
  getMapList,
  setIsFilterModalOpen,
}: MapFilterModalProps) => {
  const { setSelectedVenueCategory, selectedVenueCategory } =
    useSelectedVenueCategory()
  const [currentFilterList, setCurrentFilterList] = useState<{
    [key: string]: string[]
  }>({ ...selectedVenueCategory })

  const handleClickSubmit = () => {
    getMapList('/search/map', currentFilterList)
    setSelectedVenueCategory({ ...currentFilterList })
    setIsFilterModalOpen(false)
  }

  return (
    <S.Overlay>
      <S.MapDetailCardContainer $isFilterModalOpen={isFilterModalOpen}>
        <S.Title>{currentFilterCategory.title}</S.Title>
        <Box padding={'12px 0 16px 0'} width={335} gap={8} display={'flexW'}>
          {MAP_FILTER_ITEMS[currentFilterCategory.type]?.map((item: any) => (
            <Button
              key={item}
              height={36}
              width={106.3}
              fontSize={14}
              borderRadius={8}
              fontWeight={500}
              color={
                currentFilterList[currentFilterCategory.type].includes(item)
                  ? 'primary500'
                  : 'gray400'
              }
              borderColor={
                currentFilterList[currentFilterCategory.type].includes(item)
                  ? 'primary50'
                  : 'gray50'
              }
              backgroundColor={
                currentFilterList[currentFilterCategory.type].includes(item)
                  ? 'primary50'
                  : 'gray0'
              }
              onClick={() => {
                setCurrentFilterList((prev) => {
                  if (prev[currentFilterCategory.type].includes(item)) {
                    const newItems = prev[currentFilterCategory.type].filter(
                      (i) => i !== item,
                    )
                    return {
                      ...prev,
                      [currentFilterCategory.type]: newItems,
                    }
                  } else {
                    const newItems = [...prev[currentFilterCategory.type], item]
                    return {
                      ...prev,
                      [currentFilterCategory.type]: newItems,
                    }
                  }
                })
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
        <Box width={335} gap={8} display={'flexCC'}>
          <Button
            height={48}
            width={163.5}
            fontSize={14}
            borderRadius={8}
            fontWeight={700}
            color={'gray600'}
            borderColor={'gray50'}
            onClick={() => {
              setIsFilterModalOpen(false)
            }}
          >
            취소하기
          </Button>
          <Button
            height={48}
            width={163.5}
            fontSize={14}
            borderRadius={8}
            fontWeight={700}
            color={'gray0'}
            backgroundColor={'primary500'}
            onClick={handleClickSubmit}
          >
            적용하기
          </Button>
        </Box>
      </S.MapDetailCardContainer>
    </S.Overlay>
  )
}

export default MapFilterModal
