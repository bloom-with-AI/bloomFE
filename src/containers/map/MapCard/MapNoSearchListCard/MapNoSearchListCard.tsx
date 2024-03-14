import Image from 'next/image'
import * as S from './styled'
import { Box } from '@/components/atoms'

const MapNoSearchListCard = () => {
  return (
    <S.MapCardContainer>
      <Box height={22} display={'flexAlignItemsCenter'} gap={8}>
        <Image width={20} height={20} alt="알림" src="/svgs/IconInfo.svg" />
        <Box
          height={22}
          fontSize={16}
          fontWeight={500}
          cursor={'pointer'}
          color={'gray900'}
        >
          해당하는 웨딩홀이 없어요.
        </Box>
      </Box>
    </S.MapCardContainer>
  )
}

export default MapNoSearchListCard
