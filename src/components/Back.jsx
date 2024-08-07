import {useNavigate } from "react-router-dom";

const Back = () =>{
    
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <button onClick={handleGoBack} className="text-rose-600 font-medium m-8 font-montserrat">Back</button>
    )
}

export default Back;