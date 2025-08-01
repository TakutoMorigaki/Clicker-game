import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './game.css';


function Game() {
    const [count, setCount] = useState(0);
    const [roop, setroop] = useState(0);
    const navigate = useNavigate();

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
      <div className="game-container">
        <div className='center'>
          押したくなる気持ちはわかるけどね。
        </div>
        <button onClick={handleclick} className="btn">押すなよ？(押した回数{count})</button><br />
        <div className='Button'>
          <button onClick={reset}>リセットボタン</button><br />
          <button onClick={() => navigate('/')}>タイトルに戻る</button>
        </div>
      </div>
    );
}

export default Game;