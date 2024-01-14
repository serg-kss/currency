import styles from './Phone.module.scss'

function Phone(props) {
    return (
        <div className={styles.phoneContainer}>
            <img className={styles.phoneImg} src={props.phone.phoneImg} alt="phone" />
            <p className={styles.phoneNumber}>{props.phone.phoneNum}</p>
            <p className={styles.phoneText}>{props.phone.phoneText}</p>
       </div>
    );
  }
  
  export default Phone;