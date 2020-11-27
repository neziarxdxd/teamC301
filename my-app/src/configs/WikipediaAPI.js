import React, {useState,useEffect} from 'react';
function PlusSign({match}) {
    useEffect(()=>{
        fetchItem();
        
    },[]);
    const [item,setItem]= useState({});
    const fetchItem= async()=>{
        const fetchItem=await fetch(
            ``
        );

    }
    console.log(match)

    
}
export default PlusSign