import styles from './InputSelect.module.scss'


function InputSelect(props) {
    return (
        <select>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>
    );
  }
  
  export default InputSelect;