/* En este archivo configuraremos los métodos para poder guardar items en el LocalStorage */

// Método para establecer el item
export const setItem = (key: string, data: any) => {
    return localStorage.setItem(key, JSON.stringify(data));
};

// Método para guardar el item
export const getItem = (key: string): any => {
    return JSON.parse(localStorage.getItem(key)!);
};

