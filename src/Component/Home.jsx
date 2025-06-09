import { useNavigate } from "react-route-dom";

function Home() {
    const navigate = useNavigate();

    return(
        <>
            <h1> クリッカーゲーム(のつもり)</h1>
            <button onClick={() => navigate('/game')}>スタート</button>
        </>
    );
}