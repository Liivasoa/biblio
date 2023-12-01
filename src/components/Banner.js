import '../styles/banner.css'
import logo from '../assets/logo.jpg'

function Banner(){
    return (
     <div className="header"> 
     <img src = {logo} alt='logo de la bibliothèque' className='logo'></img>
 

    </div> 
    )
}
export default Banner;