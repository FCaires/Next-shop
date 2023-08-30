import ItemCarrinho from "@/model/ItemCarrinho"
import Image from "next/image"


export default function DetalhesProdutos(props: ItemCarrinho) {
    return (
        <div className="flex">
            <div className="">
                <Image src={props.produto.imagemUrl} alt={props.produto.descricao} width={200} height={200} />
            </div>
            <div>
                <span>{props.produto.nome}</span>
                <span>{props.produto.preco}</span>
                <span>{props.produto.quantidade}</span>
            </div>
        </div>
    )
};
