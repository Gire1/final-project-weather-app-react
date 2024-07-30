import Weather from"./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-md">
        <Weather defaultCity="Lisbon" />
      </div>
    </div>
  );
}

export default App;
