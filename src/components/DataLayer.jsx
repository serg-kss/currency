import CurrencyExchange from "./currency-exchange/CurrencyExchange";
import Header from './header/Header';
import Footer from './footer/Footer';
import masterCard from '../img/master-card.png';
import blackCard from '../img/black-card.png';
import backgroundImg from '../img/background-main-page.png';
import phone from '../img/phone.png';
import oldPhone from '../img/old-type-phone.png';

function DataLayer() {

  const header = {
    navLinks: [
      {title: 'Послуги', route: '/poslugi'},
      {title: 'Конвертер валют', route: '/exchange'},
      {title: 'Контакти', route: '/contacts'},
      {title: 'Задати питання', route: '/questions'}
    ],
    auth: 'Особистий кабінет'
  }

  const currencyExchange = {
    button: [
      {
        title: 'Конвертер валют',
        style: {color: '#F6F7FF', colorText: '#707C87'}
      },
      {
        title: 'Конвертувати валюту',
        style: {color: '#2C36F2', colorText: '#F6F7FF'}
      }
    ],
    image: [masterCard, blackCard],
    data: [
      {
        title: 'Чіп Чендж',
        text: 'Обмінник валют - навчальний',
      },
      {
        title: 'Конвертер валют',
        text: 'Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.',
        style: {colorTitle: '#1F1E25', colorText: '#707C87'}, 
      }
    ],
    backgroundImg: backgroundImg,
  }

  const footer = {
    phone: [
      {
        phoneImg: phone,
        phoneNum: '3773',
        phoneText: 'Цілодобова підтримка'
      }, 
      {
        phoneImg: oldPhone,
        phoneNum: '8 800 111 22 33',
        phoneText: 'Безкожтовно для дзвінків в межах України'
      }
    ]
  }

    return (
      <div>
        <Header header = {header}/>
        <CurrencyExchange currencyExchange = {currencyExchange}/>
        <Footer footerLinks = {header.navLinks} footer = {footer}/>
      </div>
    );
}
  
  export default DataLayer;