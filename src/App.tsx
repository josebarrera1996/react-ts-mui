import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";
import { NotificationProvider } from "./context/notification.context";

// Componente principal de la aplicación
// Implementación de las rutas y de los contextos generales
function App() {

  return (
    // Implementando el Provider para toda la aplicación
    <NotificationProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
