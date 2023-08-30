'use client'
import { ReactNode, createContext, useState } from "react"

interface PesquisaContextsProps {
    aberto: boolean,
    abrirPesquisa: () => void
}

export const PesquisaContexts = createContext({} as PesquisaContextsProps)

export default function PesquisaProvider({ children }: { children: ReactNode }) {
    const [aberto, setAberto] = useState<boolean>(false)

    function abrirPesquisa() {
        setAberto(state => !state)
    }

    return (
        <PesquisaContexts.Provider value={{ aberto, abrirPesquisa }}>
            {children}
        </PesquisaContexts.Provider>
    )
};
