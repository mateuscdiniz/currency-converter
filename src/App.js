import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './App.css';

function App() {
  // Initializing all the state variables
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('brl');
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    Axios.get(`${process.env.BASE_URL}`).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);

  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  return (
    <div className="App">
      <div className="heading">
        <h1>Currency converter</h1>
      </div>
      <div className="container">
        <div className="left">
          <h3>Amount</h3>
          <input
            type="text"
            placeholder="Enter the amount"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="middle">
          <h3>From</h3>
          <Dropdown
            options={options}
            onChange={(e) => {
              setFrom(e.value);
            }}
            value={from}
            placeholder="From"
          />
        </div>

        <div className="right">
          <h3>To</h3>
          <Dropdown
            options={options}
            onChange={(e) => {
              setTo(e.value);
            }}
            value={to}
            placeholder="To"
          />
        </div>
      </div>
      <div className="result">
        <button
          onClick={() => {
            convert();
          }}
        >
          Convert
        </button>

        <p>
          {input +
            ' ' +
            from.toUpperCase() +
            ' = ' +
            output.toFixed(2) +
            ' ' +
            to.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

export default App;
