import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <GameBoard cardPosition={[2, 1]} />
    </div>
  );
}

export default App;
