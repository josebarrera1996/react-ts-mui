import { Alert, AlertColor, Snackbar, Typography } from "@mui/material";
import React from "react";

// Type para definir las propiedades de este componente
type NotificationProps = {

    // Propiedades y métodos
    open: boolean;
    msg: string;
    severity: AlertColor | undefined;
    handleClose: () => void;
};

// Componente de tipo funcional que servirá para representar notificaciones mediante alertas
// con sus respectivas propiedades
export const Notification: React.FC<NotificationProps> = ({
    open,
    msg,
    severity,
    handleClose,
}) => {
    return (

        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={4000}
            open={open}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={severity}>
                <Typography>{msg}</Typography>
            </Alert>
        </Snackbar>
    );
};