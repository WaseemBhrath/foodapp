// Foodisplay.js
import React, { useContext } from 'react';
import './foodisplay.css';
import { storeContext } from '../Context/storeContext';

const Foodisplay = ({ Category }) => {
    const context = useContext(storeContext);

    // Check if context is undefined
    if (!context) {
        return <div>Error: Context is not provided</div>;
    }

    const { food_list } = context;

    return (
        <div className="food-list">
            <h1>Favourite Dishes Near You</h1>
            {food_list.map((food, index) => (
                <div key={index}>{food}</div>
            ))}
        </div>
    );
};

export default Foodisplay;
