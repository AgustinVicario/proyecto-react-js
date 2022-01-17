import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarApp } from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavbarApp />
      <ItemListContainer greeting="Catalogo de Productos" />
    </div>
  );
}

export default App;
