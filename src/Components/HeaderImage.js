import darkImage from '../images/bg-desktop-dark.jpg'
import lightImage from '../images/bg-desktop-light.jpg'
import {useState} from 'react'
import Header from './Header'
const HeaderImage = ()=>{
    const [image,setImage] = useState(darkImage)
   
    return(
        <div>
            <img src={image} ></img>
        </div>
    )
}

export default HeaderImage;