import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_URL} from '../utils/base'

function SwiggyAPICall(){
    const [restaurantData, setrestaurantData] = useState([]);

    useEffect(() =>{
        fetchData();
    },[]);

    // const fetchData = async () => {
    //     const data = await fetch(API_URL);
    //     const json = await data.json();
    //     setrestaurantData(json?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //    };

    const fetchData = async () => {
        await axios.get(API_URL)
        .then(response => {
            const restData=response?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setrestaurantData(restData);
           
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <>
         <h1 className="font-bold text-xl my-4">Restaurants List</h1>
            <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-12 gap-x-12">
                {restaurantData.map((restaurant) => (
                    <RestaurantCardView  key={restaurant.id} data={restaurant}/>
                ))}
            </section>
        </>
    )
}

export default SwiggyAPICall;

/*
DO's
====
1. Write API Call in useEffect hook,
    1.1  the body of the component is rendered
    1.2  Call back function of useEffect hook is called one time ,([]- dependency array)
2. Swiggy API call can be in two ways. select one method,
    1.1 Fetch method
    1.2 Axios API Call
        1.2.1. Extract API and store in a local variable
        1.2.2. set the value to state variable using state function
3. Extract API data
4. Populate Data in UI
5. constant URL's will be in base.js
6. handle errors using try catch
7. use conditional rendering
*/

