import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SearchButton } from "./SearchButton";



export function NavBar() {
    return (
        <div className="flex justify-between items-center  m-12">
            <div>
                <nav>
                    <ul className="flex text-xl gap-6 font-semibold">
                        <li className="hover:underline"><Link href='/'>HOME</Link></li>
                        <li className="hover:underline"><Link href='/produtos'>PRODUTOS</Link></li>
                        <li className="hover:underline"><Link href='/sobre'>SOBRE NÓS</Link></li>
                        <li className="hover:underline"><Link href='/carrinho'>CARRINHO</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="text-2xl flex gap-6">
                <SearchButton />
            </div>
        </div>
    )
};
