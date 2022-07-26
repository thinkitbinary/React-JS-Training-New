import React, { useEffect, useState } from 'react'
import Products from './Products'

const ProductsApi = () => {
    const [products, setProducts] = useState([])
    const [date, setDate] = useState("")
    const [refresh, setRefresh] = useState(0)
    const [toggleStart, setToggleStart] = useState(false)
    const [productId, setProductId] = useState(0)

    const handleToggleStart = () => {
        setToggleStart(prev => !prev)
    }

    const handleDate = () => {
        const _date = new Date().toLocaleString()
        setDate(_date)
        if (toggleStart) {
            setRefresh(prev => prev === 9 ? 0 : prev + 1)
        }
    }

    const fetchApi = () => {
        const url = "https://fakestoreapi.com/products/" + productId
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts([...products, data]))
    }

    useEffect(() => {
        const tt = setTimeout(handleDate, 1000)
        return () => clearTimeout(tt)
    }, [date])

    useEffect(() => {
        if (toggleStart) {
            if (refresh / 9 === 1) {
                setProductId(prev => prev+1)
            }
        }
    }, [refresh])

    useEffect(()=>{
        if (productId>0){
            fetchApi()
        }
    }, [productId])

    return (
        <div style={{ display:'flex', flexDirection:'column'}}>
            <div style={{ textAlign:"end", padding:".5rem"}}>{date}</div>
            <div style={{ display:'flex', justifyContent:"space-around", gap:'1rem', height:"2rem",padding:"1rem", 
                backgroundColor:"seagreen", fontSize:"1.25rem"}}>
                <div>Product to be Fetched with ID : <span style={{ color:"white", padding:".25rem 1rem", backgroundColor:"gray"}}>{productId+1}</span></div>
                <div>Next API to be Fetched in :  <span style={{ color:"white", padding:".25rem 1rem", backgroundColor:"gray"}}>{9 - refresh}  sec</span></div>
                <button onClick={handleToggleStart}> {toggleStart ? "Stop API Call" : "Start API Call"}</button>
            </div>
            <Products products={products}/>
        </div>
    )
}

export default ProductsApi