function printHello(event){
    console.log("hello");
    console.log(event);
}

function printBye(){
    console.log("bye");
}

function handleDblClick(){
    console.log("hello * 2");
}

export default function Button(){
    return (
    <div>
        <button onClick={printHello}>
            Click me!
        </button>
        <p onMouseOver ={printBye}> this is parah is for event dem
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptate, molestias in facere libero rem neque totam omnis
             voluptatibus aperiam deserunt, facilis officia repudiandae ipsum.
             Necessitatibus culpa illo voluptas nisi temporibus!</p>
        <button onDoubleClick={handleDblClick}> double click me!</button>
    </div>)
}