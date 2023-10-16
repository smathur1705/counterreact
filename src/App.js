import logo from './logo.svg';
import './App.css';
import { useState} from 'react';
import Item from './Item';
import ReactPlayer from 'react-player';

function App() { 
  const [count, setCount]=useState(0);


  function incHandler(){
    console.log("clicked on inc");
    setCount(count + 1 );
  }

  function decHandler(){
    setCount(count-1);
    console.log('clicked on dec');
  }

  function resetHandler(){
    setCount(0);
  }





  return (
    <div className="App">
    <container>

    
    <div className='heading'>Increment & Decrement</div>

      <div className='btun'>
        <button className='inc-btn' onClick={incHandler}>+</button>
        <div className='count'>{count}</div>
        <button className='dec-btn' onClick={decHandler}>-</button>
      </div>

      <button className='reset-btn' onClick={resetHandler}>Reset</button>

    </container>

    <Item>created by Sumit Mathur</Item>
    <ReactPlayer className='video' url={'https://www.youtube.com/watch?v=KsXp22QLMv0'}></ReactPlayer>


      
    </div>
  );
}

export default App;
