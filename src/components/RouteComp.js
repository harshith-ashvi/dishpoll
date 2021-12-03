import React from "react";
import { Route, Switch } from "react-router-dom";
import Dishes from "./pages/Dishes";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Poll from "./pages/Poll";

const RouteComp = (props) => {
    return (
        <>
            <Switch>
                <Route path="/" component={Login} exact/>
                <Route path="/dishes" component={Dishes} />
                <Route path="/poll" component={Poll}/>
                <Route component={NotFound}/>
            </Switch>
        </>
    )
}

export default RouteComp