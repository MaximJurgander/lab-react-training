import React from 'react';
import './App.css';
import IdCard from './components/idcard/IdCard.jsx';
import Greetings from './components/greetings/Greetings.jsx';
import Random from './components/random/Random.jsx';
import BoxColor from './components/boxcolor/BoxColor.jsx';
import CreditCard from './components/creditcard/Creditcard.jsx';
import Rating from './components/rating/Rating.jsx';


function App() {
  return (
    <div className="App">   

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/men/44.jpg" />

      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg" />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">David</Greetings>
      <Greetings lang="es">Martinez</Greetings>

      <Random 
        min={1} 
        max={6} />
      <Random 
        min={1} 
        max={100} />

      <BoxColor 
        r={255} 
        g={0} 
        b={0} /> 

      <BoxColor 
        r={128} 
        g={255} 
        b={0} />

      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />

      <Rating>childern={0}</Rating>
      <Rating children={1.49}></Rating>
      <Rating>childern={1.5}</Rating>
      <Rating>childern={3}</Rating>
      <Rating>childern={4}</Rating>
      <Rating>childern={5}</Rating>
      </div>    
  );
}

export default App;

//can only render boolean, strings, numbers, maybe arrays
//if not, convert to the one of the above