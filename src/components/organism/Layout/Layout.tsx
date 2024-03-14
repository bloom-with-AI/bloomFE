'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import * as S from './styled'
import { Box } from '@/components/atoms'
import { Header, Footer } from '@/components/molecules'
import pagesConfig from '@/lib/pagesConfig'

interface LayoutProps {
  children: React.ReactNode
}

type PageKey = keyof typeof pagesConfig

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname()
  const [currentHeight, setCurrentHeight] = useState<number>(0)
  const pageConfig = pagesConfig[pathname as PageKey]

  const innerHeight =
    (pageConfig.showHeader ? 56 : 0) + (pageConfig.showFooter ? 72 : 0)

  useEffect(() => {
    setCurrentHeight(window.innerHeight)
  }, [])

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
