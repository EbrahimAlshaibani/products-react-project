import { useState } from "react";
const About = ()=>{
    const [name , setName] = useState("Ebrahim")
    const [isChanged , setChaged] = useState(true);
    const [clickState , setClickState] = useState("UnCLicked") 
    const changeName = ()=>{
        if(isChanged){
            setChaged(false)
            setName("Mohammed")
            setClickState("Clicked")
        }else{
            setChaged(true)
            setName("Ebrahim")
            setClickState("UnCLicked")
        }
        
        // console.log(this.name);
        // this.name = name;
        // console.log(this.name)
    }
    return(
        <div className="container">
            <h1>about page</h1>
            <h1>{name}</h1>
            <button type="button" className="btn btn-dark" onClick={ changeName }>{clickState}</button>
        </div>
    );
}
export default About