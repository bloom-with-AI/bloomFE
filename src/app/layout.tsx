import type { Metadata } from 'next'
import ClientComponentContainer from '@/app/ClientComponentContainer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Bloom',
  description: '똑똑한 AI 웨딩 플레너 블룸',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="ko">
      <body>
        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${'432a56f357642e72f4ea20e4abfb5131'}
&autoload=false&libraries=services`}
        />
        <ClientComponentContainer>{children}</ClientComponentContainer>
      </body>
    </html>
  )
}

export default RootLayout
