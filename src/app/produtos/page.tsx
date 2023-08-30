import ProdutosItem from "../components/Produtos";

const produtos = [
    { id: 1, nome: 'Camisa Branca MCD', descricao: 'Camisa branca da MCD', imagemUrl: 'https://mcdbrasil.vtexassets.com/arquivos/ids/190614/T-Shirt-Regular---Mirror-Branco-1.jpg?v=637960169220370000', preco: 149.90, quantidade: 10 },
    { id: 2, nome: 'Bermuda Azul MCD ', descricao: 'Bermuda azul mcd', imagemUrl: 'https://mcdbrasil.vtexassets.com/arquivos/ids/186292/Boardshorts-Square-Azul-3.jpg?v=637956091506870000', preco: 249.90, quantidade: 10 },
    { id: 3, nome: 'Moletom Preto MCD', descricao: 'Moletom preto da mcd', imagemUrl: 'https://mcdbrasil.vtexassets.com/arquivos/ids/208476-1600-1600?v=638173478869670000&width=1600&height=1600&aspect=true', preco: 299.90, quantidade: 10 },
    { id: 4, nome: 'Camisa Preta MCD', descricao: 'Camisa preta da mcd', imagemUrl: 'https://mcdbrasil.vtexassets.com/arquivos/ids/190535-800-800?v=637960161634370000&width=800&height=800&aspect=true', preco: 169.90, quantidade: 10 },
    { id: 5, nome: 'Camisa Santa MCD', descricao: 'Camisa Santa da MCD', imagemUrl: 'https://mcdbrasil.vtexassets.com/arquivos/ids/205111-1600-1600?v=638144085861270000&width=1600&height=1600&aspect=true', preco: 199.90, quantidade: 10 },
];


export default function page() {
    return (
        <div className="flex flex-col m-10 gap-5">
            <h1 className="text-6xl font-semibold">Produtos</h1>
            <div className="flex gap-5 flex-wrap">
                {produtos.map((produtos) => (
                    <ProdutosItem key={produtos.id} produtos={produtos} />
                ))}
            </div>
        </div>
    );
};
