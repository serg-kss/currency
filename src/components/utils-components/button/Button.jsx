import styles from './Button.module.scss'

function Button(props) {
    return (
      <button 
        className={styles.button} 
        style={
          { 
            backgroundColor: props.style.color,
            color: props.style.colorText
          }
        }>{props.text}</button>
    );
  }
  
  export default Button;