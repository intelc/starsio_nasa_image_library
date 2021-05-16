import React from 'react'
import { useRouter } from 'next/router'
import Cards from '../../components/Cards'
import styles from '../../styles/Home.module.css'
function searchResult ({data,input}) {
    // const router = useRouter()
    // const { id } = router.query

    return (
        <div>
            <p style={{textAlign:'center'}}>Search Results for: <span>{input}</span></p>
            <Cards content = {data}/>
            <p style={{textAlign:'center'}}>All {data.length} results displayed </p>
        </div>
        
    )
}
export async function getServerSideProps(context) {
    
    const input = context.params.id
        
    let ret
    try{
        const res = await fetch('https://images-api.nasa.gov/search?'+ new URLSearchParams({
                q: input.toString(),
                media_type: 'image',
            }),{mode: 'cors'})
    
        
        ret =await res.json()
    
    }catch(e){
        console.log(e)
    }
    
    ret=ret.collection.items

    let data = []
    for(let i=0;i<ret.length;i=i+1){
        data.push({slug:ret[i].data[0].nasa_id,
                    title:ret[i].data[0].title,
                    description:ret[i].data[0].description ? ret[i].data[0].description :ret[i].data[0].description_508,
                })
    }
  
    
// Pass data to the page via props
return { props: {data,input}} 
}




export default searchResult
