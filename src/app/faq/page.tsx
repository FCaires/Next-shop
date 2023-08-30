'use client'
import { useForm } from 'react-hook-form'
import validator from 'validator'

interface FormData {
    name: string,
    email: string,
    pergunta: string,
}

const Faq = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const onSubmit = (data: FormData) => {
        alert(JSON.stringify(data));
    };

    return (
        <div className="flex flex-col m-10 gap-4">
            <h1 className="text-6xl font-semibold">FAQ</h1>
            <form className='flex flex-col gap-2 items-start'>
                
                <div className="flex flex-col gap-1 text-xl font-semibold w-[600px] h-full">
                    <label htmlFor="">Nome completo</label>
                    <input
                        className={errors?.name && 'p-1 border border-red-700 shadow-lg font-normal '}
                        type="text"
                        placeholder="Digite seu nome"
                        {...register('name', { required: true })}
                    />
                    {errors?.name?.type === 'required' && (
                        <p className='text-red-700 text-sm'>Nome é obrigatório</p>
                    )}
                </div>

                <div className="flex flex-col gap-1 text-xl font-semibold w-[600px] ">
                    <label htmlFor="">E-mail</label>
                    <input
                        className={errors?.email && 'p-1 border border-red-700 shadow-lg font-normal '}
                        type="email"
                        placeholder="Digite seu email"
                        {...register('email', { required: true, validate: (value) => validator.isEmail(value) })}
                    />
                    {errors?.email?.type === 'required' && (
                        <p className='text-red-700 text-sm'>E-mail é obrigatório</p>
                    )}
                    {errors?.email?.type === 'validate' && (
                        <p className='text-red-700 text-sm'>E-mail inválido</p>
                    )}
                </div>

                <div className="flex flex-col gap-1 text-xl font-semibold w-[600px]  ">
                    <label htmlFor="">Pergunta</label>
                    <textarea
                        className={errors?.pergunta && 'p-1 resize-none border border-red-700 shadow-lg font-normal text-zinc-800 h-[100px]'}
                        placeholder="Digite sua pergunta"
                        {...register('pergunta', { required: true, minLength: 10 })}
                    />
                    {errors?.pergunta?.type === 'required' && (
                        <p className='text-red-700 text-sm'>Pergunta é obrigatório</p>
                    )}
                    {errors?.pergunta?.type === 'minLength' && (
                        <p className='text-red-700 text-sm'>No minímo 10 caracteres</p>
                    )}
                </div>

                <div className="">
                    <button
                        className="rounded font-semibold w-[600px] h-[30px] bg-zinc-100  hover:bg-black hover:text-white"
                        type="submit"
                        onClick={() => handleSubmit(onSubmit)()}
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
};
export default Faq;