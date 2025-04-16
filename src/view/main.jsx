import { useEffect } from "react"


export default function MainDisplay (){

    

    useEffect(()=>{
        console.log("이팩트");
    },[]);

    return (
        <div>MAIN PAGHE</div>
    )
}