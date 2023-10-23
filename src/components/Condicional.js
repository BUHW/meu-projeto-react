import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function limparEmail() {
    setUserEmail('');
  }

  return (
    <section>
      <h2>cadastre seu email</h2>

      <form>
        <input
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={enviarEmail}>Enviar email</button>
        {userEmail && (
          <div>
            <p>o email do usuario é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar Email</button>
          </div>
        )}
      </form>
    </section>
  );
}

export default Condicional;
