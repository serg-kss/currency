import NavLogo from "../utils-components/nav-logo/NavLogo";
import styles from './Header.module.scss'
import NavigationLink from "../utils-components/nav-links/NavigationLink";

function Header(props) {
    return (
      <header className={styles.header}>
        <div className="header-logo">
          <NavLogo />
        </div>
        <div className="header-navigation">
          <ul className={styles.navigationList}>
            {props.header.navLinks.map(element => <li className={styles.navigationLinks}><NavigationLink link = {element}/></li> )}
          </ul>
        </div>
        <div className="header-auth">
          <NavigationLink link = {props.header.auth} authImg = {props.header.authImg}/>
        </div>
      </header>
    );
  }
  
  export default Header;