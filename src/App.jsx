import "./App.css";
import LogoFreecodeCamp from "./componentes/LogoFreecodeCamp.jsx";
import ListaDeTareas from "./componentes/ListaDeTareas.jsx";
function App() {
  return (
    <div className="aplicacion-tareas">
      <LogoFreecodeCamp />
      <div className={"tareas-lista-principal"}>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
