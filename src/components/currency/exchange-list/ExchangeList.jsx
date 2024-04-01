import styles from './ExchangeList.module.scss'
import arrow from '../../../img/arrow.png';

function ExchangeList(props) {
    const header = 'Історія конвертації';
    return (
        <div className={styles.exchangeList}>
            <h2>{header}</h2>
            {
                props.list.map((el) => {
                    return (
                        <ul className={styles.exchangeRef}>
                            <li>{el.inputDate}</li>
                            <li>{el.inputAmoutIn}{el.currencyTypeIn}</li>
                            <li><img src={arrow} alt="arrow" className={styles.currencyArrow}/></li>
                            <li>{el.currencyOut}{el.currencyTypeOut}</li>
                        </ul>
                    )
                })
            }
      </div>
    );
  }
  
  export default ExchangeList;