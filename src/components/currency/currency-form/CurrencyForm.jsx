import styles from './CurrencyForm.module.scss';
import React, { useState } from 'react';
import Input from '../../utils-components/form/input/Input';
import InputSelect from '../../utils-components/form/input-select/InputSelect';
import Button from '../../utils-components/button/Button';

function CurrencyForm(props) {

  const [selectIn, setSelectIn] = useState('UAH');
  const [selectOut, setSelectOut] = useState('USD');
  const [currencyOut, setCurrencyOut] = useState(0);
  const [items, setItems] = useState([])

  function filterByCurrencyOut(items) {
    console.log(items)
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
    filterByCurrencyOut(items)
    
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
          <InputSelect name='currencyTypeIn' value={selectIn} onChange={handleSelectIn}/>
          <Input type={inputDate.type} className={styles.currencyDate} name={inputDate.name}/>
        </div>
        <div className={styles.currencyBlock}>
          <label className={styles.currencyLable}>Result:</label>
          <Input type={inputAmoutOut.type} name={inputAmoutOut.name} className={styles.currencyInput}/>
          <InputSelect name="currencyTypeOut" value={selectOut} onChange={handleSelectOut}/>
          <Button text='Зберегти результат' type="submit" style={{color: '#2C36F2', colorText: '#F6F7FF'}} className={styles.currencyButton}/>
        </div>
      </form>
    </div>
  );

  }
  
  export default CurrencyForm;