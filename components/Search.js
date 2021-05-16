import React from 'react'
import styles from '../styles/Search.module.css'
import {useState,useCallback} from 'react'
import {AiOutlineEnter} from 'react-icons/ai'
import { useRouter } from 'next/router';

const Search = ({on,change}) => {
    const [searchParam,setSearchParam]= useState('')
    const onKeyDown = (event)=> {
        // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
        if (event.key === 'Enter' && on) {
          event.preventDefault();
          event.stopPropagation();
          onSubmit();
        }
      }
   

  
    const onSubmit=(e)=>{
        if (e){
            e.preventDefault()
        }
        
        if(!searchParam){
            alert('bro u tripp\'in')
            return
        }
        
        setSearchParam('')
        change()
        router.push(`/searchResult/${searchParam}`)
        
    }
    const callbackRef = useCallback(inputElement => {
        if (inputElement) {
          inputElement.focus();
        }
      }, []);
    const router=useRouter()
    return (
        <div className={styles.searchBarIn}>
          
            
            <input type='search' className={on?styles.textarea:styles.textareaNo} value={searchParam}
            onChange={(e)=>setSearchParam(e.target.value)}
            onKeyDown={onKeyDown} ref={on?callbackRef:undefined}/>
            <AiOutlineEnter type= 'submit' className={on?styles.enter:styles.enter2} onClick={onSubmit}/>
          
        </div>
        
    )
}

export default Search
