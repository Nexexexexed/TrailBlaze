import { Link } from "react-router-dom";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaVk } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";

const Header = () => {
  const isAuth = useSelector((state: RootState) => state.users.isAuth);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logo_image} src="/public/iconTrailBlaze.svg" />
        <div className={styles.logo_text}>
          <p>Trail</p>
          <p>Blaze</p>
        </div>
      </div>

      <nav className={styles.navigation}>
        <Link to="/">Home</Link>
        {isAuth ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/auth">Sign in</Link>
        )}
      </nav>
      <ul className={styles.social_network}>
        <li>
          <a href="https://vk.com/arkadiy_b_v">
            <FaVk size={30} color="#ffffff" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/79009073737">
            <MdOutlineWhatsapp size={30} color="#ffffff" />
          </a>
        </li>
        <li>
          <a href="https://t.me/nex3d">
            <PiTelegramLogo size={30} color="#ffffff" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
