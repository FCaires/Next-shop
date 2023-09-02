'use client'
import Moeda from "@/app/utils/Moeda";
import Produto from "@/model/Produto";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";


type params = {
    id: number
}
type Props = {
    params: params;
    produtosDetalhes: Produto
};

export default function Page({ params }: Props) {

    const [produtos, setProdutos] = useState<any>([])

    const { id } = params

    const getProdutos = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/produtos/${id}`)
            const data = response.data
            setProdutos(data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProdutos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col m-10 gap-5 ">
            <h1 className="text-6xl font-semibold">Detalhes</h1>
            <div className="flex gap-6">
                <div className="border rounded">
                    <Image src={produtos.imagemUrl} alt={produtos.descricao} width={300} height={200} />
                </div>
                <div className="flex flex-col w-[400px] h-[300px] p-1 gap-2">
                    <span className="flex justify-center font-bold text-2xl">{produtos.nome}</span>
                    <span className="text-zinc-700 font-bold ">{produtos.descricao}</span>
                    <span className="line-through">{Moeda.formatar(produtos.preco * 1.2)}</span>
                    <span className="font-bold text-4xl text-red-700">{Moeda.formatar(produtos.preco)}</span>
                    <span className="">ou até 4x de R$ {Moeda.formatar(produtos.preco / 4)} s/juros</span>
                    <span className="font-bold">Quantidade em estoque:{produtos.quantidade}</span>
                    <button className="mt-6  rounded-md flex justify-center items-center p-1 border-none bg-black text-white">Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    )
};
