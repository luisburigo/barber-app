import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Auth from "./pages/Auth";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Auth} path="/" exact/>
                <Route component={() => <h1>Hello</h1>} path="/app"/>
            </Switch>
        </BrowserRouter>
    )
}
