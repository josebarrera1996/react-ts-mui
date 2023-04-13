import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

// Definiendo un 'type' que servirá para el 'Provider'
// Para lograr una inyección a nivel global en la app
type ThemeProp = {
    children: JSX.Element;
};

// Definiendo la paleta de temas
export enum themePalette {
    BG = "#12181b",
    LIME = "#C8FA5F",
    FONT_GLOBAL = "'JetBrains Mono', monospace",
}

// Definiendo el ´theme' para cada uno de los componentes que utilizarán 'Material'
const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: themePalette.BG,
        },
        primary: {
            main: themePalette.LIME,
        },
    },
    typography: {
        fontFamily: themePalette.FONT_GLOBAL,
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em",
                },
            },
        },
    },
});

// Componente que aplicará los estilos definidos a los componentes hijos
export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};