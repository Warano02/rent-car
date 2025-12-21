import React from 'react'
import { AppProvider } from './AppProvider'
import { AuthProvider } from './AuthProvider'
import { CarBookingProvider } from './CarBookingProvider'
import ChatProvider from './ChatsProvider'
import { CurrencyProvider } from './CurrencyProvider'
import { RentOutCarProvider } from './RentOutCarProvider'

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppProvider>
            <AuthProvider>
                <CurrencyProvider>
                    <CarBookingProvider>
                        <RentOutCarProvider>
                            <ChatProvider>
                                {children}
                            </ChatProvider>
                        </RentOutCarProvider>
                    </CarBookingProvider>
                </CurrencyProvider>
            </AuthProvider>
        </AppProvider>
    )
}

export default Provider