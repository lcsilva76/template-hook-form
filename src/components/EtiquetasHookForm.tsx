import { useState, type ChangeEvent } from "react"
import {useForm} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    nome: yup.string().required("O nome é obrigatório"),
    email: yup.string().email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
    cpf: yup.string().min(11,"O CPF deve ter pelo menos 11 digitos")
    .required("O CPF é obrigatório")
}).required()


type Cliente = {
    nome: string
    email: string
    cpf: string
    cep?: string
    rua?: string
    numero?: string
    bairro?: string
    cidade?: string
    estado?: string
}

export default function EtiquetasHookForm(){
    
    const {register, handleSubmit, formState:{errors}, setValue, setFocus} = useForm<Cliente>({
            resolver:yupResolver(schema)
        })

    const buscarCep = (e: ChangeEvent<HTMLInputElement>)=>{
        const cep = e.target.value.replace(/\D/g, '')
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
            setValue('rua', data.logradouro)
            setValue('bairro', data.bairro)
            setValue('cidade', data.localidade)
            setValue('estado', data.uf)
            setFocus('numero')
        })
    }
   
   // const [cliente, setCliente] = useState<Cliente>({"nome": "", "email": "", "cpf": ""})

    const [listaClientes, setListaclientes] = useState<Cliente[]>([])

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setCliente({...cliente, [e.target.name]: e.target.value})
    // }

    const handleClient = (cliente:Cliente)=>{
        setListaclientes([...listaClientes, cliente])
    }

    return(
        <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900 
              sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">  
                <h1 className="text-3xl font-bold text-slate-950 sm:text-4xl">Cadastro</h1>
                <form onSubmit={handleSubmit(handleClient)} className="rounded-2xl border border-slate-200 bg-white 
                      p-6 shadow-xl shadow-slate-200/60 sm:p-8">
                    <fieldset className="space-y-5">
                        <legend className="mb-6 text-lg font-semibold text-slate-950">
                            Dados pessoais
                        </legend>

                        <label className="block text-sm font-medium text-slate-700">
                            Nome
                            <input
                                className="mt-2 block w-full rounded-lg border 
                              border-slate-300 bg-white px-4 py-3 text-slate-900"
                                type="text"
                                {...register('nome')}
                                placeholder="Digite seu nome completo"
                            />
                            <span>{errors.nome?.message}</span>
                        </label>

                        <label className="block text-sm font-medium text-slate-700" htmlFor="email">
                            E-mail
                            <input
                                className="mt-2 block w-full rounded-lg border 
                                border-slate-300 bg-white px-4 py-3 text-slate-900"
                                type="text"
                                {...register('email')}
                                placeholder="voce@exemplo.com"
                                />
                                <span>{errors.email?.message}</span>
                        </label>

                        <label className="block text-sm font-medium text-slate-700" htmlFor="cpf">
                            CPF
                            <input
                                className="mt-2 block w-full rounded-lg border 
                                border-slate-300 bg-white px-4 py-3 text-slate-900"
                                type="text"
                                {...register('cpf')}
                                placeholder="000.000.000-00"
                                />
                                <span>{errors.cpf?.message}</span>
                        </label>

                </fieldset>
                <fieldset>
                    <legend className="mb-6 text-lg font-semibold text-slate-950">Endereço</legend>
                    <label className="block text-sm font-medium text-slate-700">CEP
                        <input className="mt-2 block w-full rounded-lg border 
                                border-slate-300 bg-white px-4 py-3 text-slate-900"
                                type="text" {...register("cep")}
                                onBlur={buscarCep}/>
                    </label>
                    <label className="block text-sm font-medium text-slate-700">Rua
                        <input className="mt-2 block w-full rounded-lg border 
                                border-slate-300 bg-white px-4 py-3 text-slate-900"
                                type="text" {...register("rua")}/>
                    </label>
                    <label className="block text-sm font-medium text-slate-700">Número
                        <input className="mt-2 block w-full rounded-lg border 
                                border-slate-300 bg-white px-4 py-3 text-slate-900"
                                type="text" {...register("numero")}/>
                    </label>
                    <label className="block text-sm font-medium text-slate-700">Bairro
                        <input className="mt-2 block w-full rounded-lg border 
                                border-slate-300 bg-white px-4 py-3 text-slate-900"
                                type="text" {...register("bairro")}/>
                    </label>
                    <label className="block text-sm font-medium text-slate-700">Cidade
                        <input className="mt-2 block w-full rounded-lg border 
                                border-slate-300 bg-white px-4 py-3 text-slate-900"
                                type="text" {...register("cidade")}/>
                    </label>
                    <label className="block text-sm font-medium text-slate-700">Estado
                        <input className="mt-2 block w-full rounded-lg border 
                                border-slate-300 bg-white px-4 py-3 text-slate-900"
                                type="text" {...register("estado")}/>
                    </label>
                    <button
                        className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold 
                        text-white shadow-lg shadow-indigo-600/20 "
                        type="submit">
                        Criar cadastro
                    </button>
                </fieldset>
            </form>
            </div>
            <div className="w-full mt-8 rounded-2xl border border-slate-200 
               bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8 flex gap-2 flex-wrap justify-evenly">

                {listaClientes.map((cli,index)=>(
                    <div key={index} className="w-3/12 mt-8 rounded-2xl border border-yellow-400 
                    bg-yellow-200 p-6 shadow-xl shadow-slate-200/60 sm:p-8">
                        <p className="font-bold mb-2">Nome: {cli.nome}</p>
                        <p className="font-bold mb-2">E-mail: {cli.email}</p>
                        <p className="font-bold mb-2">CPF: {cli.cpf}</p>
                        <p className="font-bold mb-2">Rua: {cli.rua}, {cli.numero}</p>
                        <p className="font-bold mb-2">Bairro: {cli.bairro}</p>
                        <p className="font-bold mb-2">Cidade: {cli.cidade} - {cli.estado}</p>
                        <p className="font-bold mb-2">CEP: {cli.cep}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}