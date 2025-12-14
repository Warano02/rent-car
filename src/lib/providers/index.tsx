import React from 'react'
import { AppProvider } from './AppProvider'
import { AuthProvider } from './AuthProvider'
import { CurrencyProvider } from './CurrencyProvider'

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppProvider>
            <AuthProvider>
                <CurrencyProvider>
                    {children}
                </CurrencyProvider>
            </AuthProvider>
        </AppProvider>
    )
}

export default Provider