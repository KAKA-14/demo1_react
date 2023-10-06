import {useState,useEffect} from 'react';
import Axios from 'axios';
function Contact(){
    const [name,setName]=useState("Kanishak");//use state is responsible for seting state in a functional component
    //const [x,setX]=useState(0);
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{//if promise is being resolved
            if(res.status===200){
                console.log(res);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{//if promise is being rejected
            alert("Error in fetching data");
        })
    },[])
    //useEffect-->for component did mount,[]-->passing list to avoid re-rendering
    return(
        <div>
            <h1>The owner of this page is {name}</h1>
            <button onClick={()=>setName("Shriya")}>Change Name</button>
        </div>
    )
}
export default Contact;