import React from 'react'
import styles from '../styles/Search.module.css'
import {useState,useCallback} from 'react'
import {AiOutlineEnter} from 'react-icons/ai'
import { useRouter } from 'next/router';

/*

Search bar which toggles between hidden and show by clicking icon

CSS transition implemented for smooth transitions
*/


const Search = ({on,change}) => {

    

    //search bar user input state
    const [searchParam,setSearchParam]= useState('')

    //triggers search on 'enter' key
    const onKeyDown = (event)=> {
        // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
        if (event.key === 'Enter' && on) {
          event.preventDefault();
          event.stopPropagation();
          onSubmit();
        }
      }
   

    //submit function filters empty request 
    //and redirects to search results
    const router=useRouter()
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
    //focus search bar once activated by clicking search icon
    const callbackRef = useCallback(inputElement => {
        if (inputElement) {
          inputElement.focus();
        }
      }, []);

    
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
