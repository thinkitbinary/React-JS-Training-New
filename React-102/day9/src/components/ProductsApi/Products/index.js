import React, { useContext } from 'react'
import { OtherContext } from '..'
import { UserContext } from '../../..'

const Products = ({ products }) => {
    // const username = useContext(UserContext)
    // const otheruser = useContext(OtherContext)
    console.log("Products Component rendered")
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", padding: "1rem", height: "68vh", overflowY: "scroll" }}>
            {/* <h2>{username} : {otheruser}</h2> */}
            {products.length > 0
                ?
                products.map(ele =>
                    <div key={ele.id}
                        style={{ display: "flex", gap: "2rem", borderBottom: "1px solid gray", padding: "1rem", width:"1000px" }}
                    >
                        <img src={ele.image} width="150px" />
                        <div style={{ display:"flex", flexDirection:"column", gap:"1rem"}}>
                            <div style={{ fontSize:"1.25rem" , fontWeight:600}}>{ele.title}</div>
                            <div style={{ fontSize:"1rem" , fontWeight:500, color:"gray"}}>{ele.description}</div>
                            <div style={{ padding:".5rem 1rem", backgroundColor:'lightgray', borderRadius:'1rem', maxWidth:"120px"}}>{ele.category}</div>
                            <div style={{ fontSize:"1.5rem" , fontWeight:700, color:"gray"}}>${ele.price}</div>
                        </div>
                    </div>
                )
                :
                <div style={{ textAlign: "center" }}>No Products to Show</div>
            }
        </div>
    )
}

export default React.memo(Products);