import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Particle from '../components/ParticleFrame'
import Cards from '../components/Cards'
import CallToSearch from '../components/CallToSearch'
import popularPosts from '../assets/popularPosts'




export default function Home() {

  // Scroll page to focus on cards, button triggered
  const scroll = () => {
    const element = document.getElementById('cards')
    const y = element.getBoundingClientRect().top + window.scrollY;

    //scroll behavior not supported on Safari Mobile
    window.scroll({
      top: y - 80,
      behavior: 'smooth'
    });
  }

  return (
    <div>
      <div className={styles.topContainer} >
        <div className={styles.galaxyContainer}>
          <img src='/PIA15416_large.jpeg' alt='' className={styles.galaxyBG} />
        </div>
        <Particle />
        <Header clickBtn={scroll} />
      </div>


      <p className={styles.sectionText}>Popular Photos</p>
      <Cards content={popularPosts} />
      <CallToSearch />


      <footer className={styles.footer}>
        <p>Yiheng Chen 2021</p>
      </footer>
    </div>
  )
}
