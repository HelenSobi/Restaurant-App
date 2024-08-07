function RestDetailMenu(props){
    const {image, name, price} = props.data;
    return (
        <div className="w-36 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                
            <img src={`${image}`} alt={name} className="object-cover rounded-t-xl"/>
            <div className="px-4 py-3 w-36"> 
                <p className="text-xs  text-black block capitalize">{name}</p>
                <p className="text-sm cursor-auto" style={{color:"#e11d48"}}>AED {price}</p>
            </div>
        </div>
    )
}

export default RestDetailMenu;