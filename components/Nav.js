import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import { useEffect, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { useRouter } from 'next/router'

/*

Nav bar is logo-only at the top of home pages,

As user scroll down, the search icon shows and the layout shifts

CSS transition implemented for extra coolness

*/



const Nav = ({ onSearch }) => {
  const router = useRouter()
  let listener = null

  //location of the window: top | mid
  const [scrollState, setScrollState] = useState("top")

  // hides search button at the top of home page
  // transition to show when user scroll down or on other pages
  useEffect(() => {
    if (router.pathname === '/') {
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
    } else {
      setScrollState('mid')

    }
  }, [scrollState])

  return (

    <nav className={navStyles.top} style={{ zIndex: 3 }}>


      <Link href='/' prefetch><span className={scrollState == "top" ? navStyles.font : navStyles.font2} >STARS.IO</span></Link>

      <BiSearchAlt id="name" className={scrollState == 'mid' ? navStyles.searchin : navStyles.searchout}
        disabled={scrollState == 'top'} onClick={scrollState == 'mid' ? onSearch : undefined} />



    </nav>
  )
}

export default Nav
