import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Bem vindo.</h1>
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>
          <span>Você não tem uma conta ?</span>
          <button>Inscreva-se</button>
        </div>
        <div className="right">
          <form>
            <input type="text" placeholder="usuário ou email" />
            <input type="email" placeholder="email" />
            <button>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login