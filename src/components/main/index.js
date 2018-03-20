import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home";
import Menu from "../menu";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/menu' component={Menu} />
            </Switch>
        </main>
    )
}

export default Main;