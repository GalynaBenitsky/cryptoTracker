import React, { useState, useEffect } from 'react';
import './App.css';
import Coin from './Coin';
import coinGecko from './apias/coinGecko';

const EURCoin = () => {

  const [coins, setCoins]= useState([]);
  const [search, setSearch] = useState('');


  useEffect(()=>{
    const fetchData = () => {
      coinGecko.get('/coins/markets',{
        params:{
          vs_currency: 'eur',
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
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <form className='coin-search'>
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
    </>
  )
}

export default EURCoin
