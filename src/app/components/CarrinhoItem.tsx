import ItemCarrinho from "@/model/ItemCarrinho";
import Image from "next/image";
import Link from "next/link";
import Moeda from "../utils/Moeda";



export default function CarrinhoItem(props: ItemCarrinho) {


    return (
        <div className=" flex gap-2 rounded shadow-lg bg-zinc-600">
            <Image src={props.produto.imagemUrl} alt={props.produto.descricao} width={100} height={100} className="rounded" />
            <div className="flex flex-col">
                <span className="font-semibold mr-1">{props.produto.nome}</span>
                <span className="font-semibold text-red-600 justify-start flex">{Moeda.formatar(props.produto.preco)}</span>
                <span className="font-normal  justify-start flex">quantidade: {props.quantidade}</span>
                <Link href={{ pathname: `/produtos/${props.produto.id}` }} className="flex justify-center items-center w-[100px]"><button className="border-none rounded  bg-black text-white w-full h-full">Detalhes</button></Link>
            </div>
        </div>
    )
}