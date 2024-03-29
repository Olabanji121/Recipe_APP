import React, { Component } from 'react'

export default class Search extends Component {

    render() {
        const { handleChange, handleSubmit, search } = this.props;
        return (
					<div className="container">
						<div className="row">
							<div className="col-10 mx-auto col-md-8 mt-5 text-center">
								<h1 className="text-slanted text-capitalize">
									search recipes with{" "}
									<strong className="text-orange">yummy recipes</strong>
								</h1>
								<form className="mt-4">
									<label htmlFor="search" className="text-capitalize">
										type recipes separated by comma
									</label>
									<div className="input-group">
										<input
											type="text"
											name="search"
											className="form-control "
											placeholder="chicken, meat, fish, carrots.... "
											value={search}
											onChange={handleChange}
										/>
										<div className="input-group-append">
											<button
												type="submit"
												className="bg-info input-group-text text-white"
												onClick={handleSubmit}
											>
												<i className="fas fa-search " />
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				);
    }
}
