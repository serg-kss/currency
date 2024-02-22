import styles from './AuthLink.module.scss'
import { Link } from "react-router-dom";

function AuthLink(props) {
    return (
      <div className={styles.auth}>
        <Link to ='' className={styles.authLink}>{props.title}</Link>
      </div>
    );
  }
  
  export default AuthLink;