import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";

const Products = ()=>{

    const [checkAuth,setCheckAuth] = useState("false")
    const [isWaiting,setIsWaiting] = useState(true)
    const [products,setProduct] = useState(null)

    const deleteAction = (id)=>{
        const updatedProducts = products.filter(products => products.id != id)
        setProduct(updatedProducts)
    }
    const addProduct = ()=>{
        fetch("https://test.eshaibani.com/api/addProduct",{
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDIyODMxYjc4NTQyMDVlNzE5YWJjZTJiYjQ0MjdjZGI2ZTdjNTlkY2Q5N2U3NjllMWIwODdmYjJkZGFkZWY2ZTFlY2U2MTc3YmEwMDBmNzEiLCJpYXQiOjE2NjQ1NDkwMTIuNDgyNjc4LCJuYmYiOjE2NjQ1NDkwMTIuNDgyNjg0LCJleHAiOjE2OTYwODUwMTIuNDc1MTU1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.X9akaR83kBm4gWuurK6E6QKUglpd8Q0QinKdejkmjn-oLNovWcjtxTp6TSqpXUbWJPY4WfDUhEDZeppWQ2USuHhKsgvtSBrZTutbtfHsJh2suW3npNSC9wZh9ZZ45HJV0DGRZN4M4Sm_rY3PQsjAGyox6HxYSgCpHUUxiukoaSL6HzTtsQkH9p_VCaeeBYrxopWu7wiNtAmVzkkOsQS0EA0LMTHonRrNDT3-nFoPgRDjMj73lXv4EHLGuWYC2KbuCUwUjtiG99N-msLOqlRWygfkXNQGJeQbwzlbnxcuJbdwHTXmvVZtAQa0auXRpMAy2tEc2fg__VZeGRyKJdAbrmysiGtoyYkyX_iqA5_ZAwhPH-5aZ9ySTsszlwXbuGnL7UItJDyhigJOv9B6dFUVEMMP14rJSuQUaMbCsjLYHTz8Go9j0g8mXvqrvD1O2GNUg-6OaSA-E9F329D2xdwv6LeRBQk5NtzV288oAJjpT_sXJ5bpeJ1uYK3L9Wu6DAVe6Lt0Qvz-TnSKBmG3S4L1qSY8Ma8UC0WlqKr_rqT2xiWXGeL0xQqqwva5s6R8Aac1dPzZJAX4LyeiBemuPiMOYM6CHvQ8Ox3YwUzq4OXvYrtd0r7pbLmbia5nlVWQAB2s0UV0VME9bGO-XJLEz2giMDARothqLlqh3hZCaLurUTA', 
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                name : "Ebrahim Hasan",
                detail : "This is from React",
                price : 500
            })
        })  
    }
    useEffect(()=>{
        // console.log("Ebrahim")
        // console.log(products)
        fetch("https://test.eshaibani.com/api/Products",{
            headers: new Headers({
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDIyODMxYjc4NTQyMDVlNzE5YWJjZTJiYjQ0MjdjZGI2ZTdjNTlkY2Q5N2U3NjllMWIwODdmYjJkZGFkZWY2ZTFlY2U2MTc3YmEwMDBmNzEiLCJpYXQiOjE2NjQ1NDkwMTIuNDgyNjc4LCJuYmYiOjE2NjQ1NDkwMTIuNDgyNjg0LCJleHAiOjE2OTYwODUwMTIuNDc1MTU1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.X9akaR83kBm4gWuurK6E6QKUglpd8Q0QinKdejkmjn-oLNovWcjtxTp6TSqpXUbWJPY4WfDUhEDZeppWQ2USuHhKsgvtSBrZTutbtfHsJh2suW3npNSC9wZh9ZZ45HJV0DGRZN4M4Sm_rY3PQsjAGyox6HxYSgCpHUUxiukoaSL6HzTtsQkH9p_VCaeeBYrxopWu7wiNtAmVzkkOsQS0EA0LMTHonRrNDT3-nFoPgRDjMj73lXv4EHLGuWYC2KbuCUwUjtiG99N-msLOqlRWygfkXNQGJeQbwzlbnxcuJbdwHTXmvVZtAQa0auXRpMAy2tEc2fg__VZeGRyKJdAbrmysiGtoyYkyX_iqA5_ZAwhPH-5aZ9ySTsszlwXbuGnL7UItJDyhigJOv9B6dFUVEMMP14rJSuQUaMbCsjLYHTz8Go9j0g8mXvqrvD1O2GNUg-6OaSA-E9F329D2xdwv6LeRBQk5NtzV288oAJjpT_sXJ5bpeJ1uYK3L9Wu6DAVe6Lt0Qvz-TnSKBmG3S4L1qSY8Ma8UC0WlqKr_rqT2xiWXGeL0xQqqwva5s6R8Aac1dPzZJAX4LyeiBemuPiMOYM6CHvQ8Ox3YwUzq4OXvYrtd0r7pbLmbia5nlVWQAB2s0UV0VME9bGO-XJLEz2giMDARothqLlqh3hZCaLurUTA', 
            }),
        })
        .then(response=>{
            if(!response.ok){
                throw Error("Server error")
            }
            return response.json();
        }).then(data=>{
            setProduct(data)
            setIsWaiting(false)
        }).catch(error=>{
            console.log(error)
        })
    },[])
    return(
        <div>
            <button type="button" onClick={ ()=>addProduct()} className="btn btn-success">Add Product</button>
            {/* <h1>{status}</h1> */}
            {isWaiting && <h1>loading</h1>}
            {/* <button type="button" onClick={ ()=>setCheckAuth("true")} className="btn btn-primary">Auth</button>
            <p>{checkAuth}</p> */}
            {products && <ProductsList products={products} title='Products' deleteAction={deleteAction}/>}
        </div>
    );
}
export default Products