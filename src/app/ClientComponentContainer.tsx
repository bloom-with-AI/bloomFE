'use client'

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
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Box
          width={'100%'}
          height={'100vh'}
          display={'flexCC'}
          backgroundColor={'wrapper'}
        >
          <Box width={430} height={'100vh'} display={'flexDAC'}>
            <Box
              width={375}
              height={'100vh'}
              padding={'0 20px'}
              display={'flexDAC'}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}

export default ClientComponentContainer
