
import {useState} from 'react';

export default function App (){
  return (
    <div>
      <Calculator />
    </div>
  );
};

const MyButton = ({ onClick, label }) => {
    return <button className="btn" onClick={onClick}>{label}</button>;
  };
  
  
  const MyPinkbutton = ({ onClick, label }) => {
    return <button className="btnpink" onClick={onClick}>{label}</button>;
  };

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [prevValue, setPrevValue] = useState(null);

  const handleNumberClick = (num) => {
    setDisplayValue((prevDisplayValue) =>
      prevDisplayValue === '0' ? String(num) : prevDisplayValue + num
    );
  };

  const handleOperatorClick = (op) => {
    if (operator) {
      handleEqualClick();
    } else {
      setOperator(op);
      setPrevValue(displayValue);
      setDisplayValue('0');
    }
  };
  
  const handleEqualClick = () => {
    const currentNumber = parseFloat(displayValue);
    const previousNumber = parseFloat(prevValue);
  
    switch (operator) {
      case '+':
        setDisplayValue(previousNumber + currentNumber);
        break;
        case '-':
            setDisplayValue(previousNumber- currentNumber);
        break;
      case '/':
      setDisplayValue(previousNumber/ currentNumber);
        break;
    case '*':
        setDisplayValue(previousNumber * currentNumber);
        break;
      default:
        break;
    }
  
    setOperator(null);
    setPrevValue(null);
  };
  

  const handleClearClick = () => {
    setDisplayValue('0');
    setOperator(null);
    setPrevValue(null);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div>
        <div>
          <MyButton onClick={() => handleNumberClick(1)} label="1" />
          <MyButton onClick={() => handleNumberClick(2)} label="2" />
          <MyButton onClick={() => handleNumberClick(3)} label="3" />
          <MyPinkbutton onClick={() => handleOperatorClick('+')} label="+" />
        </div>
        <div>
          <MyButton onClick={() => handleNumberClick(4)} label="4" />
          <MyButton onClick={() => handleNumberClick(5)} label="5" />
          <MyButton onClick={() => handleNumberClick(6)} label="6" />
          <MyPinkbutton onClick={() => handleOperatorClick('-')} label="-" />
        </div>
        <div>
          <MyButton onClick={() => handleNumberClick(7)} label="7" />
          <MyButton onClick={() => handleNumberClick(8)} label="8" />
          <MyButton onClick={() => handleNumberClick(9)} label="9" />
          <MyPinkbutton onClick={() => handleOperatorClick('/')} label="/" />
        </div>
        <div>          

          <MyPinkbutton onClick={handleClearClick} label="AC" />
          <MyButton onClick={() => handleNumberClick(0)} label="0" />
          <MyPinkbutton onClick={handleEqualClick} label="=" />
          <MyPinkbutton onClick={() => handleOperatorClick('*')} label="x" />
        </div>
      </div>
    </div>
  );
};


