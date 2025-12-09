import React from 'react'
import { AppProvider } from './AppProvider'

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppProvider>
            {children}
        </AppProvider>
    )
}

export default Provider