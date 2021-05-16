import React from 'react'
import TextLoop from "react-text-loop";
import {BiSearchAlt} from 'react-icons/bi'
import styles from '../styles/CallToSearch.module.css'

const CallToSearch = () => {
    return (
        <p className={styles.sectionText}>Try<span> </span> 
        
          <span style={{position:'relative',top:'2px'}}>
          <TextLoop springConfig={{ stiffness: 180, damping: 8 }} >
                      
                      <span>apollo</span>
                      <span>galaxy</span>
                      <span>earth</span>
                      <span>telescope</span>
                      <span>sky</span>
                      <span>cat</span>
                      <span>moon</span>
                      
          </TextLoop>{" "}
          </span>
          <BiSearchAlt size='3rem'/>
          in the search bar
        </p>
    )
}

export default CallToSearch
