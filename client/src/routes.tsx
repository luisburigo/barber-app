import React from "react";
import {Router, Switch, Route, Redirect} from "react-router-dom";
import {createBrowserHistory} from "history";

const Routes = () => {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Switch>
                <Route path="/dashboard/:path?" exact>

                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;