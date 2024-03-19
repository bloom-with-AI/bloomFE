'use client'

import { ThemeProvider } from 'styled-components'
import { Box } from '@/components/atoms'
import { theme, GlobalStyle } from '@/styles'
import { useCurrentWindowHeight } from '@/hooks'
import StyledComponentsRegistry from '@/lib/registry'

interface ClientComponentContainerProps {
  children: React.ReactNode
}

const ClientComponentContainer = ({
  children,
}: ClientComponentContainerProps) => {
  const currentHeight = useCurrentWindowHeight()

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
