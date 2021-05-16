import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import {useEffect, useState} from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import { useRouter } from 'next/router'




const Nav = ({onSearch}) => {
  const router = useRouter()
  let listener = null
  const [scrollState, setScrollState] = useState("top")
  const [searchState, setSearchState] = useState(false)

  useEffect(() => {
    if(router.pathname === '/'){
      listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 120) {
          if (scrollState !== "mid") {
            setScrollState("mid")
          }
        } else {
          if (scrollState !== "top") {
            setScrollState("top")
          }
        }
      })
      return () => {
        document.removeEventListener("scroll", listener)
      }
    }else{
      setScrollState('mid')
      setSearchState(true)
    }
  }, [scrollState])

  return (

    <nav className={navStyles.top}  style={{zIndex:3}}>
      
      
        <Link href='/' prefetch><span className={scrollState== "top" ? navStyles.font:navStyles.font2} >STARS.IO</span></Link>

        <BiSearchAlt id="name" className={scrollState == 'mid' ? navStyles.searchin : navStyles.searchout } 
          disabled={scrollState == 'top'} onClick={scrollState == 'mid' ? onSearch : undefined} />
        
      
      
    </nav>
  )
}

export default Nav
