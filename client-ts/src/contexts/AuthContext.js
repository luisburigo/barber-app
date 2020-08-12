import React, {createContext, useEffect, useState} from "react";
import UsuarioService from "../services/UsuarioService";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [database, setDatabase] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        try {
            setLoading(true);
            const {data} = await UsuarioService.getInfo();
            const {nome, email, database} = data;
            setNome(nome);
            setEmail(email);
            setDatabase(database);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{nome, email, database, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;
