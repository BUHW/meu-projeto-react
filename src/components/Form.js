import { useState } from 'react'

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(`Usuario "${name}" foi cadastrado com a senha: "${password}"`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <section>
            <h1>Meu Cadastro</h1>

            <form onSubmit={cadastrarUsuario}>
                <section>
                    <label htmlfor="name">Nome: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </section>

                <section>
                    <label htmlfor="senha">Senha: </label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </section>

                <section>
                    <input type="submit" value="Cadastrar" />
                </section>
            </form>
        </section>
    );
}

export default Form;
