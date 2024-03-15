'use client'

import { usePathname } from 'next/navigation'
import * as S from './styled'
import pagesConfig from '@/lib/pagesConfig'
import { useCurrentWindowHeight } from '@/hooks'
import { Box } from '@/components/atoms'
import { Header, Footer } from '@/components/molecules'

type PageKey = keyof typeof pagesConfig

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname()
  const currentHeight = useCurrentWindowHeight()
  const pageConfig = pagesConfig[pathname as PageKey]

  const innerHeight =
    (pageConfig.showHeader ? 56 : 0) + (pageConfig.showFooter ? 72 : 0)

  return (
    <Box>
      {pageConfig.showHeader && <Header />}
      <S.Container innerHeight={innerHeight} currentHeight={currentHeight}>
        {children}
      </S.Container>
      {pageConfig.showFooter && <Footer />}
    </Box>
  )
}

export default Layout
