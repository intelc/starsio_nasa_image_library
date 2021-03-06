import React from 'react'
import CardIns from './CardIns'

/*
List of CardIns responsively arranged based on viewport size.

Input param is a list of individual image details
*/

const Cards = ({ content }) => {
    return (
        <div id='cards' className='d-flex flex-row flex-wrap ' style={{ justifyContent: 'center' }}>

            {content.map(element => {
                // console.log(element)
                return <CardIns key={element.slug} slug={element.slug} name={element.title} description={element.description.substring(0, 100) + '...'} img={`http://images-assets.nasa.gov/image/${element.slug}/${element.slug}~thumb.jpg`} />
            })
            }


        </div>
    )
}

export default Cards
