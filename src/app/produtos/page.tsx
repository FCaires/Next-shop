'use client'
import axios from "axios";
import ProdutosItem from "../components/Produtos";
import { useState, useEffect, useContext } from "react";
import Produto from "@/model/Produto";
import CarrinhoContext from "../contexts/useCarrinhoContexts";
interface ListaProdutosProps {
    produtos: Produto[]
}



const getData = async () => {
    try {
        const response = await axios.get("http://localhost:8000/produtos")
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar produtos: ", error)
        return []
    }
}

const ProdutosPage = (props: ListaProdutosProps) => {
    const { adicionarProduto, itens } = useContext(CarrinhoContext)

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function getProdutos() {
            const produtos = await getData()
            setProdutos(produtos)
        }
        getProdutos()
    }, []);

    return (
        <div className="flex flex-col m-10 gap-5">
            <h1 className="text-6xl font-semibold">Produtos</h1>
            <div className="flex gap-5 flex-wrap">
                {produtos.map((produtos, index) => (
                    <ProdutosItem key={index} produtos={produtos} comprar={adicionarProduto} />
                ))}
            </div>
        </div>
    );
};
export default ProdutosPage;
