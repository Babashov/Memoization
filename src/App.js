import './App.css';
import Header from './components/Header';
import { useState,useMemo } from 'react';

function App() {
  const [number,setNumber] = useState(0)
  const [text,setText] = useState('')


  // Calculating only changing number
  const user = useMemo(()=>{
    calculate()
    return {name:'Babashov'}
  },[number])

  // Expensive Function
  // const user = calculate();

  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} user={user}/>
      <hr/>
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)}>Click</button>

      <br/><br/>

      <input value={text} onChange={({target})=>setText(target.value)} />
    </div>
  );
}

function calculate()
{
  console.log('Calculate...');

  for (let index = 0; index < 1000000000; index++) {
    
  }

  console.log("Calculate end!");
}

export default App;
