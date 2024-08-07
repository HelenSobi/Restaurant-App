import { useParams, useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import { MENU_URL} from "../utils/base";
import RestDetailMenu from "./RestDetailMenu";
import Shimmer from "./Shimmer";
import Back from "./Back";

function RestViewDetail(){
    const [posts, setPosts] = useState(null);
    const [menu, setMenu] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false)
    const {resID} =useParams();

    
    useEffect(() => {
        const fetchData= async ()=>{
            try{
                const response = await axios.get(`${MENU_URL}${resID}`);
                const menuData =response?.data.pageProps?.initialMenuState?.menuData?.items;
                const restaurantData =response?.data.pageProps?.initialMenuState?.restaurant;
                const first20Items=menuData.slice(0,20)
                setMenu(first20Items);
                setPosts(restaurantData);
            }catch(err){
                console.log(err);
                setHasError(true);
            } finally{
                setIsLoading(false);
            }
        };
        fetchData();
    },[]);

    

    return (
        <section>
            { isLoading ? (
                <Shimmer/>
                
            ) : hasError ? (
                <p>Error Occured</p>
            ) : !posts ? (
                <p>No data available </p>
                
            ) : (
                <div className="w-fit mx-auto bg-yellow-50">
                    <Back/>
                    <div className="flex md:m-8 m-2">
                    <div className="mr-5">
                        <img src={`${posts.heroImage}`} alt={posts.branchSlug} className="h-32 w-72 object-cover rounded-t-xl"></img>
                    </div>
                    
                    <div className="flex flex-col justify-start">
                           
                    <p className="text-lg font-bold text-black block capitalize font-montserrat">{posts.branchName}</p>
                    <p className="text-gray-400 mr-3 truncate block text-sm">{posts.cuisineString}</p>
                    <div className="flex justify-start flex-col md:flex-row">
                        <div className="flex justify-start">
                        <svg height="18" width="18" viewBox="0 0 24 24" role="presentation" focusable="false">
                            <path fill="#e11d48" d="M12 1L9 9H2L7 14.0001L5 21L12 17.0001L19 21L17 14.0001L22 9H15L12 1Z"></path></svg>
                        
                        <p className="text-sm cursor-auto ml-2" style={{color:"#e11d48"}}>{posts.rate} . </p>
                        </div>
                        <p className="text-sm text-gray-600 cursor-auto md:ml-2">AED {posts.deliveryFee} delivery</p>
                       
                    </div>
                    <p className="text-sm text-gray-600 cursor-auto md:ml-2">status : {posts.status}</p>
                    </div>
                   
                    </div>
                    
                    <div className=" m-4">
                    <p className="text-lg font-bold text-black block capitalize mb-4 font-montserrat">popular menus</p>
                        <div className="pb-5 md:pb-5 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-4 justify-items-center justify-center gap-y-8 gap-x-8">
                        {
                            menu.map((item,index) => (
                                <RestDetailMenu key={index} data={item}/>     
                            ))
                        }
                        </div>
                    </div>  
                </div>
            )}
        </section>
    )
}

export default RestViewDetail;

