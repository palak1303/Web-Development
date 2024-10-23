import Product from "./Product.jsx";

function ProductTab(){
    let styles = {
        display :"flex",
        flexWrap :"wrap",
        justifycontent :"center",
        alignItem :"center",

    };
    return (
        <div style = {styles}>
        <Product title="Logitech MX Master" idx  ={0}/>
        <Product title ="Apple Pencil(2ndGen)" idx  ={1}/>
        <Product title ="Zebronics Zeb-transformer" idx  ={2}/>
        <Product title ="Petronics Toad" idx  ={3}/>
        
        </div>
    )
}
export default ProductTab;