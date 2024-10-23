import "./Product.css";
import Price from "./Price";

function Product({ title,idx}){
    let oldPrice =["12,476","1155","54343","2322"];
    let newPrice =["8,976","1,225","5223","322"];
    let description = [
        ["88000pi ","5 programmer button"] ,
        ["intituive" ,"desgin for i pad 4"],
        ["desgined fro ipad"," great touvh"],
        ["wireless" , "optical "]]
    return (
        <div className="Product" >
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <p>{description[idx][2]}</p>
        <p>{description[idx][3]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}></Price>
        </div>
    );
    
}

export default Product;