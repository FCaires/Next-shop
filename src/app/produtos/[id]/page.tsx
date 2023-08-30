import { NextPageContext } from "next";

interface detalhesProps {
    nome: string;
    preco: number;
    descricao: string;
}



const Detalhes: React.FC<detalhesProps> = ({ nome, preco, descricao }) => {
    return (
        <div>
            <h1>{nome}</h1>
        </div>
    )
}

// Detalhes.getInitialProps = ({ query }: NextPageContext) => {
//     const produto = {
//         nome: query.nome as string,
//         preco: query.preco as string,
//         descricao: query.descricao as string,
//     };
//     return produto
// }
export default Detalhes
