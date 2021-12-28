import React ,{useState,useEffect} from 'react'

import {Col, Row} from 'react-bootstrap'
import Restaurants from './Restaurants'

function Home() {
    const [hotels,setHotels]=useState([])
    useEffect(()=>{const fetchData= async ()=>{
        await fetch('/restaurants.json')
        .then((res)=>res.json())
        .then((data)=>setHotels(data.restaurants))


    }
    fetchData();
}, [])

console.log("data is......",hotels)
    return (
        <>
        {hotels ?(
            <Row>
                {
                    hotels.map(item=>(
                        <Col sm={12} lg={6} md={8} xl={3}>
                            <Restaurants item={item}/>
                        </Col>
                    ))
                }
            </Row>
        ):null}
            
        </>
    )
}

export default Home
