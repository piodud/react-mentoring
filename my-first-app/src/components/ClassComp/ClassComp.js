import React from "react";
import './ClassComp.css'

export default class ClassComp extends React.Component{


    render(){
        return(
        <div className="class-comp">
            This is class component. 
        </div>)
    }
}


export const ClassComp2 = class extends React.PureComponent{

    render(){
        return(
        <div className="class-comp">
            This is class PURE component.
        </div>
        )
    }
}