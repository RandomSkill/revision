import "./Header.css"
const Header =(props)=>{
    return(
        <header>
            <h1> Bienvenue !! {props.course}</h1>
        </header>
    );
}

export default Header;