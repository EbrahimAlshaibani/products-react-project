import { useState } from "react";
import ProductsList from "./ProductsList";
const Products = ()=>{
    const [products,setProduct] = useState([
        {
            id : 1,
            name : "Tea",
            detail: "Nice Tea",
            price: 2000
        },
        {
            id: 2,
            name: "Milk",
            detail: "Very nice milk",
            price: 7000
        },
        {
            id: 3,
            name: "Coffee",
            detail: "Nice Coffee",
            price: 1200
        }
    ])
    return(
        <ProductsList products={products} title='Products'/>
    );
}
export default Products