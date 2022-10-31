import { useParams } from "react-router-dom"
import ProductModel from "./ProductModel"

const ProductInfo = ()=>{
    const {id} = useParams()
    const url = "https://test.eshaibani.com/api/Product/"+id
    const { isWaiting, errorServer, products} = ProductModel(url)
    console.log(products)
    return(
        <>
        <br/>
         {products && (
            <div className="container">
            <div className="card">
                <img src={"https://test.eshaibani.com/" + products.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{products.name}</h5>
                    <hr/>
                    <p className="card-text">{products.detail}</p>
                    <a href="#" className="btn btn-primary">Buy ${products.price}</a>
                </div>
                </div>
            </div>
        )}
        </>
    )
}
export default ProductInfo