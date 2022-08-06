import React, { useEffect, useState } from 'react'
import Products from './Products'

const ProductNextApi = () => {
    const [products, setProducts] = useState([])
    const [productId, setProductId] = useState(0)

    const handleNext = () => {
        setProductId(cur => cur + 1)
    }

    const fetchApi = () => {
        const url = 'https://fakestoreapi.com/products/' + productId
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts([...products, data]))
    }

    useEffect(() => {
        if (productId>0){
            fetchApi()
        }
        else{
            alert("Not a valid product ID")
        }
    }, [productId])

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
                display: 'flex', justifyContent: "space-around", gap: '1rem', height: "2rem", padding: "1rem",
                backgroundColor: "seagreen", fontSize: "1.25rem"
            }}>
                <div>Product to be Fetched with ID : <span style={{ color: "white", padding: ".25rem 1rem", backgroundColor: "gray" }}>{productId + 1}</span></div>
                <button onClick={handleNext}> Next </button>
            </div>
            <Products products={products} />
        </div>
    )
}

export default ProductNextApi