import styles from './CurrencyExchangeBlock.module.scss'
import Button from '../utils-components/button/Button';


function CurrencyExchangeBlock(props) {
    return (
        <div className={styles.currency} style={{ backgroundImage: `url(${props.style})`} }>
            <div className={styles.currencyContainer}>
                <p className={styles.currencyTitle} style={{color: props.style.colorTitle}}>{props.data.title}</p>
                <p className={styles.currencyText} style={{color: props.style.colorText}}>{props.data.text}</p>
                <Button 
                    text = {props.button.title}
                    style = {props.button.style}
                />
            </div>
            <div className={styles.cardContainer}>
              <img src={props.img} alt="card" />
            </div>
        </div>
    );
  }
  
  export default CurrencyExchangeBlock;










