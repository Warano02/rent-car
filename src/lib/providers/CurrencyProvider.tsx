import { currencies, Currency, CurrencyName } from '@/lib/utils/currency';
import React, { createContext, useState } from 'react';

interface CurrencyContextType {
    currency: Currency;
    setCurrencyByName: (name: CurrencyName) => void;
    formatAmount: (amountXAF: number) => string;
}

export const CurrencyContext = createContext<CurrencyContextType | null>(null);

export const CurrencyProvider = ({ children, }: { children: React.ReactNode; }) => {
    const [currency, setCurrency] = useState<Currency>(currencies[0]);

    const setCurrencyByName = (name: CurrencyName) => {
        const found = currencies.find((c: Currency) => c.name === name);
        if (found) setCurrency(found);
    };

    const formatAmount = (amountXAF: number) => {
        const value = amountXAF * currency.rate;
        const formatted = Math.round(value).toLocaleString();

        return currency.position === 'before' ? `${currency.symbol} ${formatted}` : `${formatted} ${currency.symbol}`;
    };

    const value={ currency, setCurrencyByName, formatAmount }

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
};
