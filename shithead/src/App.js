import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div className="App">
      <GameBoard cardPosition={[1, 1]} />
    </div>
  );
}

export default App;
