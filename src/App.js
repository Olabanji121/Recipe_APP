import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import Recipe from "./Pages/Recipe";
import NotFound from "./Pages/Notfound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

export default class App extends Component {
	render() {
		return (
			<Router>
				<main>
					{/* NAv bar  */}
					<NavBar />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/recipes" exact component={Recipes} />
						<Route path="/recipes/:id" exact component={Recipe} />
						<Route component={NotFound} />
					</Switch>
				</main>
			</Router>
		);
	}
}
