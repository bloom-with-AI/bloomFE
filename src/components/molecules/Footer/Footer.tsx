import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import * as S from './styled'
import { Box, Text } from '@/components/atoms'

const Footer = () => {
  const pathName = usePathname()

  return (
    <Box width={375} height={72} display={'flexCC'} backgroundColor={'gray0'}>
      <Link href="/">
        <Box
          height={72}
          width={112}
          fontSize={12}
          fontWeight={500}
          cursor={'pointer'}
          display={'flexDCC'}
        >
          <Image
            width={32}
            height={32}
            alt="홈"
            src={
              pathName === '/'
                ? '/svgs/IconHomeActive.svg'
                : '/svgs/IconHome.svg'
            }
          />
          <Text
            fontSize={12}
            cursor={'pointer'}
            color={pathName === '/' ? 'primary500' : 'gray70'}
          >
            홈
          </Text>
        </Box>
      </Link>
      <Link href="/chat">
        <Box
          height={67}
          width={112}
          fontSize={12}
          fontWeight={500}
          margin={'5px 0 0 0'}
          cursor={'pointer'}
          display={'flexDCC'}
        >
          {pathName === '/chat' ? (
            <S.AIIconWrapper>
              <Image
                width={24}
                height={24}
                alt="AI"
                src="/svgs/IconFooterAIActive.svg"
              />
            </S.AIIconWrapper>
          ) : (
            <Box
              width={40}
              height={40}
              borderRadius={100}
              display={'flexCC'}
              cursor={'pointer'}
              backgroundColor={'gray50'}
            >
              <Image
                width={24}
                height={24}
                alt="AI"
                src="/svgs/IconFooterAI.svg"
              />
            </Box>
          )}

          <Text
            fontSize={12}
            color={pathName === '/chat' ? 'primary500' : 'gray70'}
            cursor={'pointer'}
          >
            AI 추천
          </Text>
        </Box>
      </Link>
      <Link href="/map">
        <Box
          height={72}
          width={112}
          fontSize={12}
          fontWeight={500}
          cursor={'pointer'}
          display={'flexDCC'}
        >
          <Image
            width={32}
            height={32}
            alt="지도"
            src={
              pathName === '/map'
                ? '/svgs/IconMapMarkerActive.svg'
                : '/svgs/IconMapMarker.svg'
            }
          />
          <Text
            fontSize={12}
            cursor={'pointer'}
            color={pathName === '/map' ? 'primary500' : 'gray70'}
          >
            지도
          </Text>
        </Box>
      </Link>
    </Box>
  )
}

export default Footer
