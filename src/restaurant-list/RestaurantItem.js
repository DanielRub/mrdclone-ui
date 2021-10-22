import React, { Component } from 'react';
import './restaurantItem.css'
import food from '../assets/food.jpeg';

export class RestaurantItem extends Component {

    render() {
        const {name,tags,logo,collect_duration,featured_cuisine,rating} = this.props.restaurant;
        return (
            <div className="item">
                <div className="image-box">
                    <img src={food} alt=""></img>
                    
                </div>
                <div className="description">
                    <img src={logo} alt=""></img>
                    <div className="text-box">
                        <h2>{name}</h2>
                        <p>{tags}</p>
                        <p className="footer">{featured_cuisine}</p>
                    </div>
                    <div id="duration">
                      <div>{collect_duration} <br/>mins</div>
                        Delivery
                    </div>
                </div>
                <div className="rating">
                    {rating}+ ratings
                </div>
            </div>
        )
    }
}

export default RestaurantItem
