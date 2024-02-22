import styles from './Input.module.scss'


function Input(props) {
    return (
      <input 
            type={props.type}
            name={props.name}
            className={styles.input}
      />
    );
  }
  
  export default Input;