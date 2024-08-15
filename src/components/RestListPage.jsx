import useRestList from '../utils/useRestList'
import RestCardView from './RestCardView';
import Shimmer from './Shimmer';

const RestListPage = () => {
  const restInfo= useRestList(); //custom hook
  if(restInfo.length === 0) return  <div>No restaurants found.</div>;
  return (
    <section>
          <div className="w-fit mx-auto">
          <h1 className="font-medium lg:text-xl py-4 font-montserrat ">Top Restaurants For You</h1>
          <div className="pb-20 md:pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-12 gap-x-12">    
          {restInfo.map((restaurant) => (
            <RestCardView key={restaurant.id} data={restaurant}/>
            ))}
            </div>
          </div>
      </section>
  );
}
export default RestListPage;

{/* <RestaurantCardView  key={restaurant.id} name={restaurant.name} cuisine={restaurant.cuisineString} 
      rating={restaurant.rate} imageId={restaurant.heroImage} deliveryTime={restaurant.avgDeliveryTime}/> */}
