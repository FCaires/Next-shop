'use client'
import { BiSearchAlt2 } from "react-icons/bi";
import { useContext } from 'react'
import { PesquisaContexts } from "../contexts/usePesquisaContexts";

export function SearchButton() {
    const { aberto, abrirPesquisa } = useContext(PesquisaContexts)
    return (
        <div>
            {aberto ? (
                <div className="flex gap-2">
                    <input type="text" placeholder="O que você procura?" className="p-3 shadow-lg appearance-none border rounded h-7 text-2xl font-semibold text-gray-700 focus:outline-none" />
                    <button onClick={abrirPesquisa}><BiSearchAlt2 /></button>
                </div>
            ) : (
                <div className="flex items-center">
                    <button onClick={abrirPesquisa}><BiSearchAlt2 /></button>
                </div>
            )}
        </div>
    )
};
