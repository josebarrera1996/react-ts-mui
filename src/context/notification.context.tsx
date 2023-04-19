import React from "react";
import { AlertColor } from "@mui/material";
import { Notification } from "../components";

// Definiendo las propiedades del contexto en este type
type ContextProps = {
    getError: (msg: string) => void;
    getSuccess: (msg: string) => void;
};

// Creando el contexto
const NotificationContext = React.createContext<ContextProps | null>(null);

// Definiendo el provider del contexto de las notificaciones
export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {

    // Utilizando 'useState' para manejar los siguientes estados
    const [msg, setMsg] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState<AlertColor | undefined>(undefined);

    // Método para cerrar la notificación
    const handleClose = () => {
        setOpen(false);
    };

    // Método para obtener el error
    const getError = (msg: string) => {
        setSeverity("error");
        setOpen(true);
        setMsg(msg);
    };

    // Método para obtener lo obtenido (en caso de éxito)
    const getSuccess = (msg: string) => {
        setSeverity("success");
        setOpen(true);
        setMsg(msg);
    };

    // Variable para obtener los valores
    const value = {
        getError,
        getSuccess,
    };

    return (
        <NotificationContext.Provider value={value}>
            <Notification
                handleClose={handleClose}
                open={open}
                severity={severity}
                msg={msg}
            />
            {children}
        </NotificationContext.Provider>
    );
};

// Definiendo un Custom Hook para notificar
export const useNotification = () => {

    // Utilizando 'useContext'
    const context = React.useContext(NotificationContext);
    if (!context) throw new Error("No existe contexto");
    return context;
};