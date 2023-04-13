import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

// Componente de tipo funcional que servirá como un wrapper (envoltorio)
// Lo definido aquí es lo que se visualizará al acceder a las rutas
export const RouterLayout: React.FC<{}> = () => {

    return (
        <>
             {/* Aplicando el Navbar */}
            <NavBar />
            {/* Se renderizarán los elementos hijos */}
            <Outlet />
        </>
    );
};