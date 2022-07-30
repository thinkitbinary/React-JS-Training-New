import React from 'react'
import styles from './styles'

const ListRendering = () => {

    const names = [ {id:1, name:'Rahul'}, {id:2, name:'Saddam'}, {id:3, name:'Suresh'}, {id:4, name:'Ravi'} ]

    // const numbers = [1,2,3,4,5]

    // numbers.forEach(ele=>console.log(ele)) // forEach does not return any array 

    // const doublesNumbers = numbers.map(ele => ele*2 ) // map return an array
    // console.log(doublesNumbers)

    // const oddNumbers = numbers.filter(ele => ele%2 !== 0 ) // map return an array
    // console.log(oddNumbers)

    // map, filter, reduce, foreach

    // const oddNames = names.filter(name => name.id%2 !== 0 )
    // names.filter(name => <h5>{name.id} : {name.name} </h5> )
    return (
        <div style={styles.counter}>
            <h2>List Rendering Application</h2>
            <div style={styles.main}>
                {names.map(ele=><h5>{ele.id} : {ele.name}</h5>)}
            </div>
        </div>
    )
}

export default ListRendering