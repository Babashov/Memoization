import './App.css';
import Header from './components/Header';
import { useState,useCallback } from 'react';

function App() {
  const [number,setNumber] = useState(0)
  const [text,setText] = useState('')

  const increment = useCallback(()=>{
      setNumber((prevState)=>prevState+1)
  },[])

  return (
    <div className="App">
      <Header increment = {increment}/>
      <hr/>
      <h1>{number}</h1>
      

      <br/><br/>

      <input value={text} onChange={({target})=>setText(target.value)} />
    </div>
  );
}

export default App;
