import headerStyles from '../styles/Header.module.css'
import {Button, Card} from 'react-bootstrap'
import { BiFontSize } from 'react-icons/bi'



const Header = ({clickBtn}) => {
  
  return (
    <div className='' style={{position:'absolute',top:'40%',left:'50%',transform: 'translate(-50%, -50%)'}}>
    <div className='d-flex flex-column' style={{zIndex:2, width:'100%'}}>
        
        <p className={headerStyles.title}>
          Welcome to 
        </p>
        <p className={headerStyles.titleLarge}>
        <span style={{color:'lightblue', fontSize:'4rem', margin:''}}>STARS.IO</span>
        </p>
        <p className={headerStyles.title}>
          Discover the NASA space images database
        </p>
        <Button className='mt-5' variant='dark' style={{alignSelf:'center'}} onClick={clickBtn}>
          Begin your experience
        </Button>
    </div>
    </div>
  )
}

export default Header
