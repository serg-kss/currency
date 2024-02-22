import CurrencyExchangeBlock from '../currency-exchange-block/CurrencyExchangeBlock';
import CurrencyForm from '../currency-form/CurrencyForm'
import styles from './CurrencyExchange.module.scss';
import { Route, Routes } from 'react-router-dom';


function CurrencyExchange(props) {
    return (
      <div className={styles.currencyExchange}>
        <CurrencyExchangeBlock 
          data={props.currencyExchange.data[0]}
          img={props.currencyExchange.image[0]}
          button={props.currencyExchange.button[0]}
          style={props.currencyExchange.backgroundImg}
        />
        <Routes>
          <Route path="/" element = {
             <CurrencyExchangeBlock 
                data={props.currencyExchange.data[1]}
                img={props.currencyExchange.image[1]}
                button={props.currencyExchange.button[1]}
                style={props.currencyExchange.data[1].style}
              />
            }/>
          <Route path="exchange" element={
            <CurrencyForm 
              formInfo={props.currencyExchange.form}
            />} />
        </Routes>
        
      </div>
    );
  }
  
  export default CurrencyExchange;