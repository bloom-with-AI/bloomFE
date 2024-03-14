'use client'

import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Box } from '@/components/atoms'
import { theme, GlobalStyle } from '@/styles'
import StyledComponentsRegistry from '@/lib/registry'

interface ClientComponentContainerProps {
  children: React.ReactNode
}

const ClientComponentContainer = ({
  children,
}: ClientComponentContainerProps) => {
  const [currentHeight, setCurrentHeight] = useState<number>(0)

  useEffect(() => {
    setCurrentHeight(window.innerHeight)
  }, [])

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Box
          width={'100%'}
          display={'flexCC'}
          backgroundColor={'wrapper'}
          height={currentHeight || '100vh'}
        >
          <Box
            width={430}
            display={'flexDAC'}
            height={currentHeight || '100vh'}
          >
            {children}
          </Box>
        </Box>
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}

export default ClientComponentContainer
