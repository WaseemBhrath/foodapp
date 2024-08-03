import React, { useContext } from 'react';
import './foodisplay.css';
import { StoreContext } from '../Context/storeContext';
import Fooditem from '../Fooditem/Fooditem';

const Foodisplay = ({ Category }) => {
    const context = useContext(StoreContext);

    if (!context) {
        return (
            <div>No context available</div>
        );
    }

    const { food_list } = context;
    // let cats = food_list?.map((li) => console.log(li.))
    // console.log(Category);
    

    return (
        <div className="food-display" id='food-display'>
            <h1>Favourite Dishes Near You</h1>
          <div className="fooditem-display-list">
            {food_list.map((item,index)=>{
               if(Category==="All" ||Category=== item.category){
                return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
               }
               

            })}

          </div>
        </div>
    );
};

export default Foodisplay;
