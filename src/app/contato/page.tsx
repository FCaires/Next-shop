import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { BiLogoGithub, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'


export default function page() {
    return (
        <div className="flex flex-col m-10 gap-5">
            <h1 className="text-6xl font-semibold">Contato</h1>
            <div className="flex flex-col w-[700px] text-2xl gap-3">
                <h2 className='flex items-center gap-2'><AiOutlineMail />fc.caires@hotmail.com</h2>
                <h2 className='flex items-center gap-2'><AiOutlinePhone /> (71)99135-7268</h2>
                <h2 className='flex items-center gap-2'><BiLogoGithub /> /FCaires </h2>
                <h2 className='flex items-center gap-2'><BiLogoTwitter /> /FCaiires </h2>
                <h2 className='flex items-center gap-2'><BiLogoInstagram /> /fernandocaiires </h2>
                <h2 className='flex items-center gap-2'><BiLogoLinkedin /> /fernandocaires15 </h2>
            </div>
        </div>
    )
};
