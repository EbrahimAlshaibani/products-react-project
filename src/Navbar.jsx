import { BrowserRouter,Link,NavLink,Route,Routes } from "react-router-dom";
import Home from './Home'
import About from './About'
import Products from './Products'
import ProductInfo from './ProductInfo'
const Navbar = ()=>{
    return(
            <BrowserRouter>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">Product React</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink style={({isActive})=>{return{color: isActive?'black':''}}} className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={({isActive})=>{return{color: isActive?'black':''}}} className="nav-link" aria-current="page" to="/Products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={({isActive})=>{return{color: isActive?'black':''}}} className="nav-link" to="/About">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/products/:id" element={<ProductInfo />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
            </BrowserRouter>
    );
}

export default Navbar;