import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import Search from './Search'
import styles from '../styles/Layout.module.css'

import {useEffect, useState} from 'react'


const Layout = ({ children }) => {

  //state tracking the showing of the search bar
  const [searchBar, setSearchBar]=useState(false)

  //function for child components to change search bar status
  const toggleSearch = ()=>{
    setSearchBar(!searchBar)
    
  }
  return (
    <>
      <Meta />
      
      <Nav onSearch={(toggleSearch)}/>
      
      
      <div className={styles.container}>
        <Search on={searchBar} change={toggleSearch}/>
        <main className={styles.main}>   
          {children}
        </main>
        <script> </script>
      </div>
    </>
  )
}

export default Layout
