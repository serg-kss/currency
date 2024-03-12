import styles from './CurrencyForm.module.scss';
import React, { useState  } from 'react';
import Input from '../../utils-components/form/input/Input';
//import InputSelect from '../../utils-components/form/input-select/InputSelect';
import Button from '../../utils-components/button/Button';

function CurrencyForm(props) {

  const [selectIn, setSelectIn] = useState('');
  const [selectOut, setSelectOut] = useState('');
  const [currencyOut, setCurrencyOut] = useState('');
  const [items, setItems] = useState([]);

  const currencies = {
    UAH: 'UAH',
    EUR: 'EUR',
    USD: 'USD'
  }
  

  function currencyExch(currencyArr, selectIn, selectOut, amountIn) {
    //курс грн к выбранной валюты конвертации для обменя грн на валюту
    const rateOut = currencyArr.filter((el)=> el.cc === selectOut)[0].rate;

    //если меняют грн на валюту
    if (selectIn === currencies.UAH) {
      setCurrencyOut((parseFloat(amountIn) / parseFloat(rateOut)).toFixed(2)) ;
      console.log((parseFloat(amountIn) / parseFloat(rateOut)).toFixed(2));
    } //если меняют валюту на грн
    else if(selectOut === currencies.UAH){
      //курс грн к выбранной валюты конвертации для обменя валюты на грн
      const rateIn = currencyArr.filter((el)=> el.cc === selectIn)[0].rate;
      setCurrencyOut((parseFloat(amountIn) * parseFloat(rateIn)).toFixed(2));
      console.log((parseFloat(amountIn) * parseFloat(rateIn)).toFixed(2));
    } // если валюту меняют на валюту
    else {
      const rateIn = currencyArr.filter((el)=> el.cc === selectIn)[0].rate;
      let convertToUAH = parseFloat(amountIn) * parseFloat(rateIn);
      setCurrencyOut((parseFloat(convertToUAH) / parseFloat(rateOut)).toFixed(2));
      console.log((parseFloat(convertToUAH) / parseFloat(rateOut)).toFixed(2));
    }
  }

  const inputAmoutIn = props.formInfo[0];
  const inputAmoutOut = props.formInfo[1];
  const inputDate = props.formInfo[2];

  function handleSelectIn(e) {
    setSelectIn(e.target.value);
  }
  function handleSelectOut(e) {
    setSelectOut(e.target.value);
  }

  const handleSubmit = (event) => {
   
    //change the default behavior of the form
    event.preventDefault();
    //create an object FormData
    const formData = new FormData(event.target);
    //create obj today's date
    const date = new Date();
    //create obj the date that we have in the form
    const dateInForm = new Date(formData.get(inputDate.name));
    //we could not predict the currency in future, so we put a check that
    // the date in form is less or equal the date we have today
    if (date >= dateInForm) {
      //add to form Data values from select fields
      formData.append('currencyTypeIn', selectIn);
      formData.append('currencyTypeOut', selectOut);
      //make change a string to send in API to format yyyymmdd
      const dateInFormCorrected = formData.get(inputDate.name).replace(/-/g, '');
      //making a request to the server to get an array with data
      fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json?date=${dateInFormCorrected}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setItems(result);
          currencyExch(result, selectIn, selectOut, formData.get(inputAmoutIn.name));
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    } else {
      alert('date is not correct, please put, the date that is not higher that the date now');
      //clean the form
    }
    
    console.log(currencyOut);
    const data = {
      inputAmoutIn: formData.get(inputAmoutIn.name),
      //inputDate: dateInFormCorrected,
      currencyTypeIn: formData.get('currencyTypeIn'),
      currencyTypeOut: formData.get('currencyTypeOut'),
    };
  };
  return (
    <div className = {styles.currencyForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.currencyBlock}>
          <label className={styles.currencyLable}>В мене є:</label>
          <Input type={inputAmoutIn.type} name={inputAmoutIn.name} className={styles.currencyInput}/>
          {/*<InputSelect name='currencyTypeIn' value={selectIn} onChange={handleSelectIn}/>*/}
          <select name='currencyTypeIn' onChange={handleSelectIn}>
            <option value="--" selected>--</option>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          <Input type={inputDate.type} className={styles.currencyDate} name={inputDate.name}/>
        </div>
        <div className={styles.currencyBlock}>
          <label className={styles.currencyLable}>Result:</label>
          <Input type={inputAmoutOut.type} name={inputAmoutOut.name} className={styles.currencyInput}/>
          {/*<InputSelect name="currencyTypeOut" value={selectOut} onChange={handleSelectOut}/>*/}
          <select name="currencyTypeOut" onChange={handleSelectOut}>
            <option value="--" selected>--</option>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          <Button text='Зберегти результат' type="submit" style={{color: '#2C36F2', colorText: '#F6F7FF'}} className={styles.currencyButton}/>
        </div>
      </form>
    </div>
  );

  }
  
  export default CurrencyForm;