import type { Metadata } from 'next'
import ClientComponentContainer from '@/app/ClientComponentContainer'

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
        <ClientComponentContainer>{children}</ClientComponentContainer>
      </body>
    </html>
  )
}

export default RootLayout
