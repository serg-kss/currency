import styles from './NavLink.module.scss'
import { Link } from "react-router-dom";

function NavigationLink(props) {
  const picture = props.authImg;
    return (
      <div>
        {picture !== undefined ? (<img src={picture} alt="login" />) : ''}
        <Link className={styles.link} to={props.link.route}>{props.link.title}</Link>
      </div>
      
    );
  }
  
  export default NavigationLink;