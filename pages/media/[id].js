import React from 'react'
import { useRouter } from 'next/router'
import Cards from '../../components/Cards'
import styles from '../../styles/Media.module.css'
import {Button} from 'react-bootstrap'
import  WebShare  from '../../components/WebShare'
const media = ({data,input}) => {
    console.log(data.links[data.links.length-2])

    return (
        <div className={styles.containernbs}>
        <div className={styles.flexnbs}>
            <p className='text-center' style={{fontSize:'2rem'}}>{data.title} </p>
            <img className='my-4' src={data.links[data.links.length-2]} alt='' style={{width:'100%',alignSelf:'center' }}/>
            <p className='text-center' >{data.description}</p>
            <WebShare posttitle={data.title} sitetitle='STARS.IO'/>
            
        </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    
    const input = context.params.id
    console.log(input)
        
    
    let ret
    
    try{
        const res = await fetch('https://images-api.nasa.gov/search?'+ new URLSearchParams({
        nasa_id: input.toString()
        
        }),{mode: 'cors'})

        

        ret =await res.json()
        
    }catch(e){
        console.log(e)
    }
    let data = 0
   

    if(ret.collection.items.length!==0){
        let links = (await fetch(ret.collection.items[0].href.toString()))
        links =await links.json()
        console.log(links)
        ret = ret.collection.items[0].data[0]
        data = {
            slug:ret.nasa_id,
            title:ret.title,
            description:ret.description ? ret.description :ret.description_508,
            links:links

        }
        
    }
  
    
// Pass data to the page via props
return { props: {data, input}} 
}


export default media
