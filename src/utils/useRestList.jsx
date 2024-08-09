import { useEffect, useState } from 'react';
import axios from 'axios';
import {API_URL} from './base';

const useRestList=() => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchData();       
      }, []);

      const fetchData = async () => {
        try {
          const response = await axios.get(API_URL);
          const restaurantData = response?.data?.pageProps?.data?.vendors;
          setRestaurants(restaurantData);
        } catch (err) {
          console.log(err);
        }
      };

    return restaurants;
}

export default useRestList;