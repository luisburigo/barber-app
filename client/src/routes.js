import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "./App";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={App} path="/" exact />
            </Switch>
        </BrowserRouter>
    )
}