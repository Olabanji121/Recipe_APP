import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { recipeData } from "../data/tempList";

export default class Recipes extends Component {
	constructor(props) {
		super(props);
		this.getRecipes = this.getRecipes.bind(this);
	}

	state = {
		recipes: [],
		search: "",
		url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`
	};

	async getRecipes() {
		try {
			const data = await fetch(this.state.url);
			// console.log(data);

			const jsonData = await data.json();
			// console.log(jsonData);

			this.setState({
				recipes: jsonData.recipes
			});
		} catch (err) {
			console.log(err);
		}
	}

	componentDidMount() {
		this.getRecipes();
	}

	handleChange = e => {
		this.setState({
			search: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		// console.log(this.state)
	};

	render() {
		return (
			<>
				<Search
					search={this.state.search}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
				<RecipeList recipes={this.state.recipes} />
			</>
		);
	}
}
