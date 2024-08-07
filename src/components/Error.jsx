import { useRouteError } from "react-router-dom";

function Error(){
    const err=useRouteError();
    return (
        <>
        {/* {err.statusText}
        {err.status} */}
       
        <div className="flex justify-center items-center h-screen">Oops!!! The requested page is not found</div>
        </>
    )
}
export default Error;