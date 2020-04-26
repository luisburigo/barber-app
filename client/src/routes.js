import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./layouts/dashboard";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Auth} path="/" exact/>
                <Route path="/dashboard/:path?" exact>
                    <Dashboard>
                        <Switch>
                            <Route path="/dashboard/users" component={() => (<h1> Usuarios </h1>)}/>
                            <Route path="/dashboard/horarios" component={() => (<h1> Horarios </h1>)}/>
                        </Switch>
                    </Dashboard>
                </Route>
                <Route path="*" exact component={() => <h1>Não existe</h1>}/>
            </Switch>
        </BrowserRouter>
    )
}
