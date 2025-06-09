import './App.css';
import { useState } from "react";


function App() {
const [count, setCount] = useState(0);

const handleclick = () => {
  if(count === 0){
    alert("おしたね？");
  setCount(count + 1);
  }
  else if(count === 50){
    alert("おしすぎだね？");
    setCount(count + 1);
  }
  else {
    setCount(count + 1);
  }
}

const reset = () => {
  alert("もう押すなよ^^");
  setCount(0);
}

  return (
    <div className="App">
      <div className='center'>
        押したくなる気持ちはわかるけどね。
      </div>
      <div className='Button'>
        <button onClick={handleclick}>押すなよ？(押した回数{count})</button>
        <br />
        <button onClick={reset}>リセットボタン</button>
      </div>
    </div>
  );
}

export default App;
