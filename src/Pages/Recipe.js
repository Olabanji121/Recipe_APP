import React, { Component } from "react";
import LoadImg from '../components/spinner'
import { Link } from "react-router-dom";

export default class Recipe extends Component {
	constructor(props) {
		super(props);
		const id = this.props.match.params.id;
		this.state = {
			// recipe: recipeData,
			recipe: {},
			id,
			loading: true
		};
    }
    
    async componentDidMount(){
        const url = `https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}&rId=${this.state.id}`;
        try{
            const res = await fetch(url);
            // console.log(res);
            const resData = await res.json()
            // console.log(resData);

            this.setState({
                recipe: resData.recipe,
                loading: false

            })
            
            
            

        } catch(err){
            console.log(err);
            
        }

    }

	render() {

		const {
			image_url,
			ingredients,
			publisher,
			publisher_url,
			source_url,
			title
        } = this.state.recipe;
        


        if(this.state.loading){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <LoadImg/>
                        </div>
                    </div>
                </div>
            )
        }
		
        return (
					<div className="container my-5">
						<div className="row">
							<div className="col-10 mx-auto col-md-6 my-3">
								<Link
									to="/recipes"
									className="btn btn-warning mb-5 text-capitalize"
								>
									back to recipes list
								</Link>
								<img
									src={image_url}
									alt="recipe"
									className="d-block w-100"
									style={{ maxHeight: "30rem" }}
								/>
							</div>
							{/* info */}
							<div className="col-10 mx-auto col-md-6 my-3  pl-5 text-center">
								<h6 className="text-uppercase">{title}</h6>
								<h6 className="text-warning text-capitalize text-slanted">
									provided by: {publisher}
								</h6>
								<a
									href={publisher_url}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-info mt-2 text-capitalize"
								>
									publisher web page
								</a>
								<a
									href={source_url}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-success mt-2 mx-2 text-capitalize"
								>
									recipe page
								</a>

								<ul className="list-group mt-4">
									<h2 className="mt-3 mb-4 text-center">Ingredients</h2>{" "}
									{ingredients.map((item, index) => {
										return (
											<li key={index} className="list-group-item">
												{item}
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				);
	}
}
