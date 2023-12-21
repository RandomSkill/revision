import "./Header.css"
import pp from "./img/pp.jpg"
const Header =(props)=>{
    return(
        <header>
        <img src={pp} />
            <h1> Bienvenue !! {props.course}</h1>
        
        </header>
    );
}

export default Header;