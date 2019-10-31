import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';

export default class Notfound extends Component {
    render() {
        return (
					<Header title=" Error 404 " styleClass='default-hero'>
						<h2 className="text-light text-uppercase">Page Not Found</h2>
						<Link
							to="/"
							className="text-uppercase btn btn-secondary btn-lg mt-3"
						>
							{" "}
							BACK TO HOME
						</Link>
					</Header>
				);
    }
}
