import React, { createContext } from "react";

interface AppContextType {
    AppName: string
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const AppName = "Qent"
    const value = { AppName }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};


