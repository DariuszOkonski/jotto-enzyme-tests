import "./App.css";
import Congrats from "./Congrats";

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
    </div>
  );
}

export default App;
