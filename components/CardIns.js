import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Link from 'next/link'

/*
 Card instances showing title, image, and description
*/
const CardIns = ({ slug, img, name, description }) => {

  return (
    <Card className='bg-dark' style={{ width: '18rem', margin: '5px', color: 'white' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="info"><Link href={`/media/${slug}`}><span>Learn More</span></Link></Button>
      </Card.Body>
    </Card>
  )
}

export default CardIns
