import {Component} from "react";

class ClassComp extends Component{
    constructor(){
        super();
        this.state={
            count:0,
            count1:0,
        }
    }
    render(){
        const {count} = this.state;
        return (
            <>
            <div className="flex justify-center items-center flex-col">
            <h1 className="text-xl">Class Component</h1>
            <h1 className="text-xl">{count}</h1>
            <button onClick= {() =>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }} 
                className="bg-rose-500 text-white p-2 mt-10 rounded text-xl">Counter</button>
            </div>
            
            </>
        )
    }
}

export default ClassComp;