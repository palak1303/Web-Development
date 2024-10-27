export default function helloMsg({username,textcolor}){

    return(
        <>
        <h1 style ={{ color : textcolor} }>Hello,{username}</h1>;
        </>
    )
}