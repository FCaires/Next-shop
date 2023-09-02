'use client'
import { useContext } from "react";
import Carrinho from "../components/Carrinho";
import CarrinhoContext from "../contexts/useCarrinhoContexts";




export default function Page() {
    const { itens } = useContext(CarrinhoContext)

    return (
        <div>
            <Carrinho itens={itens} />
        </div>
    )
};
