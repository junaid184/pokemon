import "./App.css";
import AllPokemon from "./Components/AllPokemon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonDetail from "./Components/PokemonDetail";
function App() {
  return (
    <div className="App container">
      <Router>
        <Routes>
          <Route exact path="/" element={<AllPokemon />} />
          <Route exact path="/pokemondetails/:id" element={<PokemonDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
