import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./layout/MainPage";
import ExpandableItems from './components/ExpandableItems';
import DashboardPage from "./layout/DashboardPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/dashboard" exact component={DashboardPage} />
                <Route path="/pastes" component={ExpandableItems} />
            </Switch>
        </Router>
    );
}

export default App;