import React from 'react'
import TextLoop from "react-text-loop";
import { BiSearchAlt } from 'react-icons/bi'
import styles from '../styles/CallToSearch.module.css'

/*
Implemented TextLoop library to grab attention and prompt users 

to try out a list of 'space words' in the home page.
*/
const CallToSearch = () => {
  return (
    <h3 className={styles.sectionText}>Try<span> </span>

      <span style={{ position: 'relative', top: '8px' }}>
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
      <BiSearchAlt size='3rem' />
          in the search bar
    </h3>
  )
}

export default CallToSearch
