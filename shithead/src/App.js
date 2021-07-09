import "./App.css";
import GameBoard from "./components/GameBoard";
import Card from "./components/Card";
import CardHolder from "./components/CardHolder";

function App() {
  return (
    <div className="App">
      {/* <GameBoard /> */}
      <CardHolder>
        <Card />
      </CardHolder>
    </div>
  );
}

export default App;
