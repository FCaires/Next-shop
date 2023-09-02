import Link from "next/link";


interface CarrinhoVazioProps {

}

export default function CarrinhoVazio({ }: CarrinhoVazioProps) {
    return (
        <div>
            <span className="font-bold text-xl">Nenhum item adicionado ao carrinho carrinho</span>
            <button className='mt-10 rounded-md flex items-center p-2 border-none bg-zinc-100 text-2xl hover:bg-black hover:text-white'><Link href='/produtos'>Ver produtos!</Link></button>
        </div >
    )
};
