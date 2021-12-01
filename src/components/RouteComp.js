import React from "react";
import { Route, Switch } from "react-router-dom";
import Dishes from "./pages/Dishes";
import Login from "./pages/Login";

const RouteComp = (props) => {
    return (
        <>
            <Switch>
                <Route path="/" component={Login} exact/>
                <Route path="/dishes" component={Dishes} />
            </Switch>
        </>
    )
}

export default RouteComp