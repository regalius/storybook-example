import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../component/header";

import routes from "./routes";
import logo from "../assets/logo.svg";
import "./app.css";

class App extends Component {
    render() {
        const { store } = this.props;
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <div className="App">
                        <Header />
                        <Switch>
                            {routes.map(route => <Route key={`${route.name}-${route.path}`} {...route} />)}
                        </Switch>
                    </div>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
