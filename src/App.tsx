import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";

// Componente principal de la aplicación
// Implementación de las rutas
function App() {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
