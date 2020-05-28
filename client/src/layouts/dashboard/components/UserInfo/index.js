import React, {useContext} from "react";
import AuthContext from "../../../../contexts/AuthContext";

export default function UserInfo() {
    const authContext = useContext(AuthContext);

    return (
        <div>
            {authContext.nome}
            /
            {authContext.email}
            /
            {authContext.database}
        </div>
    )
}
