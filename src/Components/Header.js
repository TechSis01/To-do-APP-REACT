import sunIcon from '../images/icon-sun.svg'
import moonIcon from '../images/icon-moon.svg'
import './Header.css'
import {useState} from 'react'

const Header = ()=>{
    const [modeIcon,setmodeIcon] = useState(sunIcon)
    const title = 'Todo'

    function changeMood(){
        if(modeIcon === sunIcon){
            setmodeIcon(moonIcon)
        }
        else{
            setmodeIcon(sunIcon)
        }
    }
    return(
        <div className = "Header-Container">
            <h1>{title}</h1>
            <div onClick = {changeMood}>
                 <img src={modeIcon}></img>
            </div>
        </div>
    )
}
export default Header