import React from 'react'
import { AppProvider } from './AppProvider'
import { CurrencyProvider } from './CurrencyProvider'

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppProvider>
            <CurrencyProvider>
                {children}
            </CurrencyProvider>
        </AppProvider>
    )
}

export default Provider