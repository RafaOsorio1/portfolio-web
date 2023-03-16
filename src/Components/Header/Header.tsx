import "./header.css";

export const Header = () => {
  return (
    <header className="header-cont">
      <nav className="nav-cont">
        <div className="nav-cont-title">
          <span className="icon-nav"></span>
          <h3 className="title-nav">Rafael Rodelo</h3>
        </div>
        <div className="nav-cont-item">
          <a className="item">Proyectos</a>
          <a className="item">Github</a>
          <a className="item">Linkedin</a>
        </div>
      </nav>
    </header>
  );
};
