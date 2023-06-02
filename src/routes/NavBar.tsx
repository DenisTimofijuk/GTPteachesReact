import { Outlet, Link } from "react-router-dom";
import style from "../style/NavBar.module.css";

function NavBar() {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.title}>
          <div className={style.logo}></div>
        </div>

        <div>
          <ul className={style["nav-list"]}>
            <li>
              <Link to="./">Home</Link>
            </li>
            <li>
              <Link to="./members">Dalyviai</Link>
            </li>
            <li>
              <Link to="./teams">Komandos</Link>
            </li>
            <li>
              <Link to="./report">Resultatai</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
