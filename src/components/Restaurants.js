import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Restaurants({item}) {
    return (
        <>
        <Link style={{textDecoration:'none'}} to={`restaurants/${item.id}`}>
        <Card className='my-3 p-3 rounded card'>
            <Card.Img src={item.photograph} className='p-3' variant='top' />
            <Card.Body>
                <Card.Title as="div">
                    <h4>{item.name}</h4>
                    </Card.Title>
                    <Card.Text as="div">
                        <p><strong>Cusine:</strong>{item.cuisine_type}</p>
                         </Card.Text>
                         <Card.Text as="div">
                        <p>{item.neighborhood}</p>
                         </Card.Text>
            </Card.Body>

        </Card>
        </Link>

            
        </>
    )
}

export default Restaurants
