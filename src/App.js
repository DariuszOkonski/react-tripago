import './App.css';
import TripList from './components/TripList';

function App() {
  return (
    <div className="App">
      <TripList />
    </div>
  );
}

export default App;

// json-server --watch ./data/db.json