import { useEffect, useState } from "react"
const ProductModel  = (url)=>{
    const [isWaiting,setIsWaiting] = useState(true)
    const [errorServer,setErrorServer] = useState(null)
    const [products,setProduct] = useState(null)

    const deleteAction = (id)=>{
        const updatedProducts = products.filter(products => products.id != id)
        setProduct(updatedProducts)
    }

    useEffect(()=>{
        fetch(url,{
            headers: new Headers({
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTdjZDc4OWQ0NTM3NmY0MTg1ODQ3ODdmN2YzNDBlM2Y0ZmE5OWE3YWI2MDNhYzk1ZGYzZWM0ZmQxZTE1MTI0MTc2YWI4ZTM1MDIzNGM0MTIiLCJpYXQiOjE2NjYyNjA5NjguOTkxMTkzMDU2MTA2NTY3MzgyODEyNSwibmJmIjoxNjY2MjYwOTY4Ljk5MTE5NTkxNzEyOTUxNjYwMTU2MjUsImV4cCI6MTY5Nzc5Njk2OC45ODkzMTA5Nzk4NDMxMzk2NDg0Mzc1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.uvGSAzV2ZYomTcN1tIYynuzOnSQAQTp-WS6F1M1hwGyea0vIw4JIWlagq4S4ROLFKLMXkOrkrk7iYCG5uy2d7932_U4-wsdrVAj03eAroZUKZXRj43b9v8ZncO9jfxCHa2isFT_bmIeYa2lDCeabNdhbWhmliD_7D04C-t1-h5V9Qre1Wfx55gTjRKKXaxrmKoLhwVtXHHm_A1lWlDFZILPknvVAqhJLC0l_GbPffhTVko9aDqxaqmoBIIuwhmJXpXYNcKWvPm2leVaLNSpH5OL3B4ZuMcBNBNUZUauB96_OurImc8XNjVLuyThIsC5loeaCriglaufD3jTCjH-RCetlzOUQzEP3C1P-3HNeRSF4ZaqjwgRG4P06KRsOzvOlyw7Ix-3MypPkYYNrxqLcgEIldxnTCJzZ2TJBqz8IYqGV84UxPCBUEjQ6xLQ2GqOfDyM-SJcJof5gu5Eve13GPJJl4ZTUFFH6ZkjBIoi8JiBaKtwbJuISXQ2Xp8w6XXJaCehiFhu_QRq9z8fgK0JauPTYgBs6xX8Y6Og42V90PHJ9p4hEGyBaDlx0wzjDSeADYZx43TWZ1N2Rf4yvRG-qZ-fTQZTn4WnfVLvswfPi0CYnNogLmtRmxn7T2uBOJUcfYqyKfN2I8v14hgA9aNtZrv0Fx6i5lnaa_wKrA4_wYos', 
            }),
        })
        .then(response=>{
            if(!response.ok){
                throw Error("Server error")
            }
            return response.json()
        }).then(data=>{
            setProduct(data)
            setIsWaiting(false)
        }).catch(error=>{
            console.log(error)
            setErrorServer(error.message)
            setIsWaiting(false)
        })
    },[url])
    return{
        isWaiting,
        errorServer,
        products,
        deleteAction
    }
}
export default ProductModel