import React, { createContext, useEffect, useState } from "react";

type User = {
    id: string;
    name: string;
    email: string;
    profil:string|undefined
};

type AuthContextType = {
    user: User | null;
    loading: boolean;
    login: (token: string) => Promise<void>;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        restoreSession();
    }, []);

    async function restoreSession() {
        try {
            setUser({
                id: "123",
                name: "Warano",
                email: "carineteoi@gmail.com",
                profil:"https://i.ibb.co/rKbXNwg5/Chat-GPT-Image-Jul-24-2025-09-26-56-AM.png"
            })
        } finally {
            setLoading(false);
        }
    }

    async function login(token: string) {
        setUser({
            id: "1",
            name: "Felix Warano",
            email: "carineteoi@mail.com",
            profil:"https://i.ibb.co/rKbXNwg5/Chat-GPT-Image-Jul-24-2025-09-26-56-AM.png"
        });
    }

    function logout() {
        setUser(null);
    }

    const value = { user, loading, login, logout }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
