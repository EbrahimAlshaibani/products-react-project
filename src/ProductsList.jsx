import {Link} from "react-router-dom"
const ProductsList = ({products,title,deleteAction})=>{
    return(
        <div className="container mt-2">
            <h1>{title}</h1>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">detail</th>
                    <th scope="col">price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product)=>(
                    <tr key={product.id}>
                        <th>{product.id}</th>
                        <td>{product.name}</td>
                        <td>{product.detail}</td>
                        <td>{product.price}</td>
                        <td>
                            <button type="button" onClick={ ()=>deleteAction(product.id)} className="btn btn-danger">Delete</button>
                        </td>
                        <td>
                        <Link to={"/products/" + product.id} className="btn btn-primary">Show</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
export default ProductsList