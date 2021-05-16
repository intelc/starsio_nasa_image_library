import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import Search from './Search'
import styles from '../styles/Layout.module.css'

import {useEffect, useState} from 'react'


const Layout = ({ children }) => {

  const [searchBar, setSearchBar]=useState(false)

  const toggleSearch = ()=>{
    setSearchBar(!searchBar)
    console.log('toggle')
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
      </div>
    </>
  )
}

export default Layout
