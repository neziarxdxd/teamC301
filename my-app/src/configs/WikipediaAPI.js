import React, {useState,useEffect} from 'react';
export const  PlusSign = ()=>{
    useEffect(()=>{
        fetchItem();
        
    },[]);
    const [item,setItem]= useState({});
    const fetchItem= async()=>{
        const fetchItem=await fetch(
            `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow`
        );

        const item = await fetchItem.json();
        setItem(item)
        console.log(item)

    }
    
}

