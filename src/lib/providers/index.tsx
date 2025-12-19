import React from 'react'
import { AppProvider } from './AppProvider'
import { AuthProvider } from './AuthProvider'
import { CarBookingProvider } from './CarBookingProvider'
import ChatProvider from './ChatsProvider'
import { CurrencyProvider } from './CurrencyProvider'

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppProvider>
            <AuthProvider>
                <CurrencyProvider>
                    <CarBookingProvider>
                        <ChatProvider>
                            {children}
                        </ChatProvider>
                    </CarBookingProvider>
                </CurrencyProvider>
            </AuthProvider>
        </AppProvider>
    )
}

export default Provider