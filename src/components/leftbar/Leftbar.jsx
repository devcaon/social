import './leftbar.scss'
import Avatar from '../../assets/avatar.png'
import Friends from '../../assets/1.png'
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

const Leftbar = () => {
  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={Avatar} alt="" />
            <span>John Doe</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Amigos</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Grupos</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Mercado</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Assistir</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memórias</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Seus atalhos</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Eventos</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Jogos</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Galeria</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Vídeos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Mensagens</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Outros</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Doações</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutoriais</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Cursos</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Cursos</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Cursos</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Cursos</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Cursos</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar