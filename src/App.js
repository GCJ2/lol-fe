import React, {useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from "./Views/Header";

function App() {
  const token = process.env.REACT_APP_WEBTOKEN;

  const champsPG1 = `https://api.pandascore.co/lol/champions?token=${token}`;
  const champsPG2 = 'https://api.pandascore.co/lol/champions?page=2&token=rtckDvcC67x6uG-PuVyG8dtECXJTPadW2oDjXOtaa_umodIsOPw';
  const champsPG3 = 'https://api.pandascore.co/lol/champions?page=3&token=rtckDvcC67x6uG-PuVyG8dtECXJTPadW2oDjXOtaa_umodIsOPw';

  // useEffect(() => {
  //   axios.get(`${champsPG1}`)
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, []);

  return (
    <div className='app'>
      <Header/>
    </div>
  );
}

export default App;
