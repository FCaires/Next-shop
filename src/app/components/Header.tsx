import Link from "next/link";
import { BiLogoGithub, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'
import { FaRegFilePdf } from 'react-icons/fa'

export function Header() {

    return (
        <div className="w-full h-10 bg-zinc-900">
            <div className="flex text-zinc-200 font-bold justify-between items-center mx-10">
                <nav>
                    <ul className="flex gap-5 m-2">
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/contato">Contato</Link></li>
                    </ul>
                </nav>
                <div className="select-none">
                    <h1>Frete grátis para todo o Brasil</h1>
                </div>
                <div className="flex gap-4">
                    <Link href='https://drive.google.com/file/d/1WCP5dsEw6WB_E6IGg7_6leW6ejE4vXGS/view?usp=drive_link' target="_blank"><FaRegFilePdf /></Link>
                    <Link href='https://github.com/FCaires' target="_blank"><BiLogoGithub /></Link>
                    <Link href='https://twitter.com/FCaiires' target="_blank"><BiLogoTwitter /></Link>
                    <Link href='https://instagram.com/fernandocaiires' target="_blank"><BiLogoInstagram /></Link>
                    <Link href='https://www.linkedin.com/in/fernandocaires15/' target="_blank"><BiLogoLinkedin /></Link>
                </div>
            </div>

        </div>
    )
};
