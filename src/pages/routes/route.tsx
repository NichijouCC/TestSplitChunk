import React, { useEffect } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { AsyncComp } from "./asyncComp";
export const RoutesSetting = (
    <HashRouter>
        <Switch>
            <Route path='/' exact render={() => <Redirect to='/main' />} />
            <Route path='/main' exact render={(props) => <AsyncComp compProps={props} importComp={() => import('../main')} />} />
            <Route path='/testPage' exact render={(props) => <AsyncComp compProps={props} importComp={() => import('../testPage')} />} />
            <Route path='/testPage1' exact render={(props) => <AsyncComp compProps={props} importComp={() => import('../testPage1')} />} />
        </Switch>
    </HashRouter>
)