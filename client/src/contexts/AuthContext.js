import React, {createContext, useEffect, useState} from "react";
import UsuarioService from "../services/UsuarioService";

const AuthContext = createContext({});
export const USER_INFO_KEY = 'USER_INFO';

export const AuthProvider = ({children}) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [database, setDatabase] = useState('');

    useEffect(() => {
        getUserInfo();
    }, []);

    const hasInStorage = () => !!localStorage.getItem(USER_INFO_KEY);

    const getInStorage = () => {
        const userInfo = localStorage.getItem(USER_INFO_KEY);
        const {nome, email, database} = JSON.parse(userInfo);
        setNome(nome);
        setEmail(email);
        setDatabase(database);
    };

    const getUserInfoAPI = async () => {
        const {data} = await UsuarioService.getInfo();
        const {nome, email, database} = data;
        setNome(nome);
        setEmail(email);
        setDatabase(database);
        localStorage.setItem(USER_INFO_KEY, JSON.stringify(data));
    };

    function getUserInfo() {
        if (hasInStorage()) {
            return getInStorage();
        }

        getUserInfoAPI();
    }

    return (
        <AuthContext.Provider value={{nome, email, database}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;
