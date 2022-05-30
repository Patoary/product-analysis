import { useState, useEffect } from 'react';


const useMac = () => {
    const [products,setProducts] = useState();
    useEffect(()=>{
        fetch('macData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return [products,setProducts];

};

export default useMac;