import CurrencyExchangeBlock from '../currency-exchange-block/CurrencyExchangeBlock';
import styles from './CurrencyExchange.module.scss'


function CurrencyExchange(props) {
    return (
      <div className={styles.currencyExchange}>
        <CurrencyExchangeBlock 
          data={props.currencyExchange.data[0]}
          img={props.currencyExchange.image[0]}
          button={props.currencyExchange.button[0]}
          style={props.currencyExchange.backgroundImg}
        />
        <CurrencyExchangeBlock 
          data={props.currencyExchange.data[1]}
          img={props.currencyExchange.image[1]}
          button={props.currencyExchange.button[1]}
          style={props.currencyExchange.data[1].style}
        />
      </div>
    );
  }
  
  export default CurrencyExchange;