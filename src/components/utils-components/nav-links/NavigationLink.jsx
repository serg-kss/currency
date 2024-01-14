import styles from './NavLink.module.scss'
import { Link } from "react-router-dom";

function NavigationLink(props) {
    return (
      <Link className={styles.link} to={props.link.route}>{props.link.title}</Link>
    );
  }
  
  export default NavigationLink;