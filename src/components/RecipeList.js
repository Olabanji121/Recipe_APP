import React, { Component } from 'react';
import Recipe from './Recipe';

export default class RecipeList extends Component {
    render() {
        const {recipes} = this.props
        return (
            <div>
                hello from recipe list
                <Recipe/>
            </div>
        )
    }
}
