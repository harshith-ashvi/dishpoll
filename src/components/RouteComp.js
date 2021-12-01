import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";

const RouteComp = (props) => {
    return (
        <>
            <Switch>
                <Route path="/" component={Login}/>
            </Switch>
        </>
    )
}

export default RouteComp