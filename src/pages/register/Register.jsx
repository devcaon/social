import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>
          <span>Você tem uma conta ?</span>
          <Link to="/login">
            <button>Faça login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Inscrever</h1>
          <form>
            <input type="text" placeholder="Usuário" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="text" placeholder="Nome" />
            <button>Inscrever-se</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register