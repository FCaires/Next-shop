import ItemCarrinho from "@/model/ItemCarrinho"
import CarrinhoItem from "./CarrinhoItem"

import CarrinhoVazio from "./CarrinhoVazio"
import Moeda from "../utils/Moeda"

interface CarrinhoProps {
    itens: ItemCarrinho[]
}

export default function Carrinho(props: CarrinhoProps) {

    const total = props.itens.reduce((soma, item) => {
        return soma + item.quantidade * item.produto.preco
    }, 0)

    return (
        <div className="flex flex-col m-10 gap-5">
            <h1 className="text-6xl font-semibold">Carrinho</h1>
            <h1 className="text-xl font-semibold text-red-600 m-3">Total: {Moeda.formatar(total)}</h1>
            <div className="flex gap-5 p-5">
                {props.itens.length === 0 ? (
                    <CarrinhoVazio />
                ) : (
                    props.itens.map((item, i) => {
                        return <CarrinhoItem key={i} {...item} />
                    })
                )}
            </div>

        </div >
    )
}