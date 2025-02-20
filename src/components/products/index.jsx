import Productitem from "./components/Productitem";


import "./style.css";

function ProductList({name, city, dummyProducts}){
    
    return(
        <>
        <h3 className="title">E-commerce products</h3>
        <h4>Name is {name} and city is {city}</h4>
        <ul>
            {
                dummyProducts.map((items, index)=> 
                <Productitem singleProduct={items} key={index}/>
            )
            }
        </ul>
        </>
    )
}
export default ProductList;