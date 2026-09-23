export default function Etiquetas(){

    return(
        <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900 
              sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">  
                    <h1 className="text-3xl font-bold text-slate-950 sm:text-4xl">
                        Cadastro
                    </h1>
                <form className="rounded-2xl border border-slate-200 bg-white 
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
                                name="nome"
                                placeholder="Digite seu nome completo"
                            />
                        </label>

                        <label className="block text-sm font-medium text-slate-700" htmlFor="email">
                            E-mail
                            <input
                                className="mt-2 block w-full rounded-lg border 
                                border-slate-300 bg-white px-4 py-3 text-slate-900"
                                type="email"
                                name="email"
                                placeholder="voce@exemplo.com"
                            />
                        </label>

                        <label className="block text-sm font-medium text-slate-700" htmlFor="cpf">
                            CPF
                            <input
                                className="mt-2 block w-full rounded-lg border 
                                border-slate-300 bg-white px-4 py-3 text-slate-900"
                                type="text"
                                name="cpf"
                                placeholder="000.000.000-00"
                            />
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
               bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
                <div className="w-xl mt-8 rounded-2xl border border-yellow-400 
                   bg-yellow-200 p-6 shadow-xl shadow-slate-200/60 sm:p-8">
                    <p className="font-bold mb-2">Nome:</p>
                    <p className="font-bold mb-2">E-mail:</p>
                    <p className="font-bold mb-2">CPF:</p>
                </div>
            </div>
        </main>
    )
}