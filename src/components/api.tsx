import React,{useState,useEffect} from "react";

function Call(){
    const [data,setData] = useState("")
    useEffect(()=> {
        fetch("http://localhost:8080/data").then(
            res=>res.json()
        ).then(
            data=>{
                setData(data.message)
                console.log(data)
            }
        )
        },[])
    return(
        <div>
        <p>{data}</p>
        </div>
    )
}
export default Call;
