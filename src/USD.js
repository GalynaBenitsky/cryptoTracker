import React, { useState, useEffect } from 'react';

import './App.css';
import Coin from './Coin';
import coinGecko from './apias/coinGecko';

const USDCoin = () => {

  const [coins, setCoins]= useState([]);
  const [search, setSearch] = useState('');


  useEffect(()=>{
    const fetchData = () => {
      coinGecko.get('/coins/markets',{
        params:{
          vs_currency: 'usd',
          order:'market_cap_desc',
           // ids: 'bitcoin, ethereum, xrp, tron, monero, litecoin, bitcoin-cash, polkadot, binancecoin, cardano, bitcoin-cash-sv, eos, neo, stellar'
          per_page:'20'   
        },
      }).then(res=>{
        setCoins(res.data);
        console.log(res.data);
      }).catch(error => console.log(error));
    }
    fetchData()
    //axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    // 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,IOT,USDT,BCH,BSV,LTC,EOS,BNB,XTZ&tsyms=USD,CAD,EUR')
    // .then(res=>{ 
    //   setCoins(res.data);  
    // }).catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <form className='coin-search bd-dark'>
        <label className='coin-text'>Search</label>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
      </form>
      <hr/>

      <div>
        {filteredCoins.map(coin => {
          return (
            <>
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            </>
          );
   
        })}
      </div>
    </div>
  )
}
export default USDCoin
