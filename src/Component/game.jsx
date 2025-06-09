import { useState } from "react";

function Game() {
    const [count, setCount] = useState(0);
    const [roop, setroop] = useState(0);

const handleclick = () => {
    if(roop === 0){
        if(count === 0){
        alert("おしたね？");
        setCount(count + 1);
        }
        else if(count === 10){
            alert("暇なん？^^");
            setCount(count + 1);
        }
        else if(count === 50){
            alert("おしすぎやね？");
            setCount(count + 1);
        }
        else if(count === 75){
            alert("もうええやろ？");
            setCount(count + 1);
        }
        else if(count === 100){
            alert("もう終わりやで^^");
            reset();
        }
        else {
            setCount(count + 1);
        }
    }
    else{
      if(count === 0){
        alert("懲りへんなぁ～");
        setCount(count + 1);
      }
      else if(count === 10){
        alert("やっぱ暇やろ？^^");
        setCount(count + 1);
      }
      else if(count === 50){
          alert("何回押すん？");
          setCount(count + 1);
      }
      else if(count === 75){
          alert("もうわかったて(笑)");
          setCount(count + 1);
      }
      else if(count === 100){
          alert("これで最後な？^^");
          reset();
      }
      else {
          setCount(count + 1);
      }
    }
}

const reset = () => {
  alert("もう押すなよ^^");
  setCount(0);
  setroop(roop + 1);
}

    return(
        <>
      <div className='center'>
        押したくなる気持ちはわかるけどね。
      </div>
      <div className='Button'>
        <button onClick={handleclick}>押すなよ？(押した回数{count})</button>
        <br />
        <button onClick={reset}>リセットボタン</button>
      </div>
        </>
    );
}

export default Game;