import { useEffect, useState } from "react";

function App() { 
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((res) => res.json())
    .then((json)=> {
      setCoins(json);
      setLoding(false);
    });
  }, [])
  return (
    <div className="App">
      <h1>The Coins!{loading?"":`(${coins.length})`}</h1>
      {loading? <strong>Loading...</strong> : 
      <select>
        {coins.map((coin) => (
        <option key={coin.id}>
          {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
        </option> ))
        }
      </select>}
      <input />
     
    </div>
  );
}

export default App;
