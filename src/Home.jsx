import { useEffect, useState } from "react"
import Carousel from "./Carousel"
const Home = ()=>{
    const name = "Ebrahim Hasan Alshiabni"
    const age = 21
    const website = "https://eshaibani.com/"
    const [number,setNumber] = useState(0)
    const clickMe = ()=>{
        console.log('clicked')
    }
    const clickWithParms = (name)=>{
        console.log("Hi "+name)
    }
    const clickWithTwoPrams =(n1,n2) =>{
        console.log("Hi "+n1 +" and "+n2)
    }
    var n = 0
    const addNumbers = ()=>{
        n+=1
        console.log(n)
        setNumber(n)
    }
    const eventClickBtn = (e,name)=>{
        console.log(e.target)
        console.log(name)
    }
    return(        
        <div>
            <Carousel />
            <div className='container mt-4'>
                <h1 className='btn btn-success'>{name}</h1>
                <p className='alert alert-primary'>{age}</p>
                <p className='btn btn-primary'>{[11,22,33,44]}</p><br/>
                <a href={website} className='btn btn-sm btn-dark'>Ebrahim</a><br/>
                <button type='button' className='btn btn-warning' onClick={clickMe}>Clickable</button><br/>
                <button type='button' className='btn btn-primary' onClick={ ()=>clickWithParms('Ebrahim') }>clickWithParms</button><br/>
                <button type='button' className='btn btn-danger' onClick={ ()=>clickWithTwoPrams('Ebrahim','Hasan') }>clickWithTwoPrams</button><br/>
                <p>{number}</p>
                <button type='button' className='btn btn-dark' onClick={ addNumbers }>+</button><br/>
                <button type='button' className='btn btn-dark' onClick={ (e)=>eventClickBtn(e,'Ebrahim') }>eventClickBtn</button><br/>
            </div>
        </div>
    )
}
export default Home