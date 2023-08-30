import Link from 'next/link'
import { BsFillSunFill } from 'react-icons/bs'

export function Main() {
    return (
        <div className="flex flex-col m-40 select-none">
            <span className="flex gap-2 items-center"><BsFillSunFill />VERÃO 2023</span>
            <h1 className='text-6xl font-semibold'>NOVA COLEÇÃO</h1>
            <span>Promoções limitadas - Peças com até 60% off</span>
            <div className=''>
                <button className='mt-6 rounded-md flex items-center p-3 border-none bg-zinc-100 text-2xl hover:bg-black hover:text-white'><Link href='/novidades'>Ver novidades!</Link></button>
            </div>
        </div>
    )
};
