import { useEffect, useState } from 'react';
import axios from 'axios';
import {API_URL} from '../utils/base';
import RestCardView from './RestCardView';
import Shimmer from './Shimmer'

const RestListPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        const restaurantData = response?.data?.pageProps?.data?.vendors;
        setRestaurants(restaurantData);
      } catch (err) {
        console.log(err);
      }
      finally{
        setisLoading(false);
      }
    };
    fetchData();       
  }, []);

  return (
    <section>
    {isLoading ? ( <Shimmer/> )
      : (
          <div className="w-fit mx-auto">
          <h1 className="font-medium lg:text-xl py-4 font-montserrat ">Top Restaurants For You</h1>
          <div className="pb-20 md:pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-12 gap-x-12">
          
          {restaurants.map((restaurant) => (
            <RestCardView key={restaurant.id} data={restaurant}/>
            ))}
            </div>
          </div>
        )
      }
      </section>
  );
}
export default RestListPage;

{/* <RestaurantCardView  key={restaurant.id} name={restaurant.name} cuisine={restaurant.cuisineString} 
      rating={restaurant.rate} imageId={restaurant.heroImage} deliveryTime={restaurant.avgDeliveryTime}/> */}
