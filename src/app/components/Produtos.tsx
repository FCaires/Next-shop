import Image from 'next/image';
import Link from 'next/link';
import Produto from '@/model/Produto';

interface ProdutosProps {
    produtos: Produto;
    comprar: (produto: Produto) => void
}

const ProdutosItem: React.FC<ProdutosProps> = ({ produtos, comprar }) => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 bg-zinc-600 ">
            <div className=''>
                <Image src={produtos.imagemUrl} alt={produtos.descricao} width={200} height={200} />
            </div>
            <div className='flex flex-col justify-center items-center '>
                <h3 className='font-bold text-xl text-white mt-1'>{produtos.nome}</h3>
                <p className='text-zinc-400'>Preço: {produtos.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                <p className='text-zinc-400'>Quantidade em estoque: {produtos.quantidade}</p>
            </div>
            <div className='flex justify-center items-center'>
                <Link href={{ pathname: `/produtos/${produtos.id}` }}  >
                    <button className='p-2 bg-black text-white m-2 rounded-md' >Detalhes</button>
                </Link>
                <button className='p-2 bg-black text-white m-2 rounded-md' onClick={() => comprar(produtos)}>Carrinho</button>
            </div>
        </div >
    );
};

export default ProdutosItem;
