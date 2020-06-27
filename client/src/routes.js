import React from "react";
import {Router, Switch, Route, Redirect} from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./layouts/dashboard";
import AuthService from "./services/AuthService";
import {createBrowserHistory} from "history";

import Funcionarios from "./pages/Funcionarios";
import Servicos from "./pages/Servicos";
import Horarios from "./pages/Horarios";
import Unidades from "./pages/Unidades";
import Clientes from "./pages/Clientes";
import Jornadas from "./pages/Jornadas";

import {AuthProvider} from "./contexts/AuthContext";

const history = createBrowserHistory();

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        AuthService.hasToken
            ? <Component {...props} />
            : <Redirect to='/'/>
    )}/>
);

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route component={Auth} path="/" exact/>
                <Route path="/dashboard/:path?" exact>
                    <AuthProvider>
                        <Dashboard>
                            <Switch>
                                <PrivateRoute path="/dashboard" exact component={() => (<h1> Início </h1>)}/>
                                <PrivateRoute path="/dashboard/funcionarios" component={Funcionarios}/>
                                <PrivateRoute path="/dashboard/servicos" component={Servicos}/>
                                <PrivateRoute path="/dashboard/clientes" component={Clientes}/>
                                <PrivateRoute path="/dashboard/horarios" component={Horarios}/>
                                <PrivateRoute path="/dashboard/unidades" component={Unidades}/>
                                <PrivateRoute path="/dashboard/jornadas" component={Jornadas}/>
                                <Route path="*" exact component={() => <h1>Não existe</h1>}/>
                            </Switch>
                        </Dashboard>
                    </AuthProvider>
                </Route>
                <Route path="*" exact component={() => <h1>Não existe</h1>}/>
            </Switch>
        </Router>
    )
}

export {history};
