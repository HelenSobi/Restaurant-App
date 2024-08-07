import { Link } from "react-router-dom";

function RestCardView(props){
    const {name, branchId, cuisineString, rate, heroImage,avgDeliveryTime,branchSlug} = props.data;
   
    return (
        <>
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link to={`branchId=${branchId}&branchSlug=${branchSlug}`}>

            <img src={`${heroImage}`} alt={name} className="h-40 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                
                <p className="text-sm font-bold text-black block capitalize truncate">{name}</p>
                <span className="text-gray-400 mr-3 truncate block text-sm">{cuisineString}</span>
                <div className="flex justify-between">
                    <div className="flex justify-start">
                    <svg height="18" width="18" viewBox="0 0 24 24" role="presentation" focusable="false">
                        <path fill="#e11d48" d="M12 1L9 9H2L7 14.0001L5 21L12 17.0001L19 21L17 14.0001L22 9H15L12 1Z"></path></svg>
                    
                    <p className="text-sm cursor-auto ml-2" style={{color:"#e11d48"}}>{rate}</p>
                    </div>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">{avgDeliveryTime}</p>
                    
                </div>
            </div>
        </Link>
        </div>
        </>
    )
}

export default RestCardView;

