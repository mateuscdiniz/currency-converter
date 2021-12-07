import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';

import {
  App,
  Button,
  Container,
  From,
  Heading,
  Input,
  Result,
  Switch,
  TextStyled,
  To,
} from './Currency.styled';

function Currency() {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState('BRL');
  const [to, setTo] = useState('USD');
  const [options, setOptions] = useState(['EUR', 'BRL', 'USD']);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    Axios.get(
      `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.REACT_APP_ACCESS_KEY}&symbols=USD,BRL,EUR&format=1`
    ).then((res) => {
      setInfo(res.data.rates);
    });
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);

  function convert() {
    var rate = info[to];
    setOutput(input * rate);
    console.log(info[to]);
  }

  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <App>
      <Heading>
        <h1>Currency converter</h1>
      </Heading>
      <Container>
        <div className="left">
          <h3>Amount</h3>
          <Input
            type="text"
            placeholder="Enter the amount"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <From>
          <h3>From</h3>
          <Dropdown
            options={options}
            onChange={(e) => {
              setFrom(e.value);
            }}
            value={from}
            placeholder="From"
          />
        </From>
        <Switch>
          <HiSwitchHorizontal
            size="30px"
            onClick={() => {
              flip();
            }}
          />
        </Switch>

        <To>
          <h3>To</h3>
          <Dropdown
            options={options}
            onChange={(e) => {
              setTo(e.value);
            }}
            value={to}
            placeholder="To"
          />
        </To>
      </Container>
      <Result>
        <Button
          onClick={() => {
            convert();
          }}
        >
          Convert
        </Button>

        <TextStyled>
          {input +
            ' ' +
            from.toUpperCase() +
            ' = ' +
            output.toFixed(2) +
            ' ' +
            to.toUpperCase()}
        </TextStyled>
      </Result>
    </App>
  );
}

export default Currency;
