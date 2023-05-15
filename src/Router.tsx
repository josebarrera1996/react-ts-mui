import React from "react";
import { Routes, Route } from "react-router-dom";
import { RouterLayout } from "./common/RouterLayout";
import { HomePage, LoginPage, CharacterPage } from "./pages";

// Componente funcional en donde se definirán las rutas de la app
export const AppRouter: React.FC<{}> = () => {

    return (
        <Routes>
            {/* Rutas */}
            <Route path="/" element={<RouterLayout />}>
                {/* Rutas anidadas */}
                <Route path="/" element={<HomePage />} />
                <Route path="/character/:id" element={<CharacterPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
};