import { useEffect, useState } from "react"
import ProductsList from "./ProductsList"
import ProductModel from "./ProductModel"
const Products = ()=>{  
    const url = "https://test.eshaibani.com/api/Products"
    const { isWaiting, errorServer, products,deleteAction} = ProductModel(url)    
    return(
        <div className="container">
            {errorServer && <h2>{errorServer} ...</h2>}
            {isWaiting && <h1>loading</h1>}
            {products && <ProductsList products={products} title='Products' deleteAction={deleteAction}/>}
        </div>
    );
}
export default Products